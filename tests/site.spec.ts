import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
// Os testes leem o conteúdo ativo (src/conteudo/ativo.ts): números e textos nunca ficam duplicados aqui.
import { existsSync } from 'node:fs';
import { negocio, cardapio, textos, avaliacao } from '../src/conteudo/ativo';

const temVideo = existsSync('public/videos/hero.mp4') || existsSync('public/videos/hero.webm');

const PAGINAS = ['/', '/cardapio/'];
const totalPratos = cardapio.reduce((n, c) => n + c.pratos.length, 0);

test.describe('páginas', () => {
  for (const rota of PAGINAS) {
    test(`${rota} abre com título, logo e cabeçalho`, async ({ page }) => {
      const r = await page.goto(rota);
      expect(r?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('header .hd__logo img')).toBeVisible();
    });
  }
  test('endereço inexistente mostra a 404 com saída', async ({ page }) => {
    const r = await page.goto('/nao-existe/');
    expect(r?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText('Página não encontrada');
    await expect(page.getByRole('link', { name: 'Voltar ao início' })).toBeVisible();
  });
  test('a logo oficial vai inteira, sem distorção (arquivo 500 x 500)', async ({ page }) => {
    await page.goto('/');
    const img = page.locator('header .logo img');
    const dim = await img.evaluate((e: HTMLImageElement) => ({ nw: e.naturalWidth, nh: e.naturalHeight, w: e.getBoundingClientRect().width, h: e.getBoundingClientRect().height }));
    expect(dim.nw).toBe(500); expect(dim.nh).toBe(500);
    expect(Math.abs(dim.w / dim.h - 1)).toBeLessThan(0.01); // proporção 1:1 preservada
  });
});

test.describe('responsividade: sem rolagem horizontal', () => {
  for (const largura of [375, 768, 1280, 1920]) {
    for (const rota of [...PAGINAS, '/nao-existe/']) {
      test(`${rota} em ${largura}px`, async ({ page }) => {
        await page.setViewportSize({ width: largura, height: 900 });
        await page.goto(rota);
        const sobra = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(sobra).toBeLessThanOrEqual(0);
      });
    }
  }
});

test.describe('acessibilidade (axe, WCAG 2.2 AA)', () => {
  // O axe lê cores no estado final: com "reduzir movimento" não há texto no meio do fade de entrada.
  test.use({ reducedMotion: 'reduce' });
  for (const rota of [...PAGINAS, '/nao-existe/']) {
    for (const largura of [1440, 390]) {
      test(`${rota} em ${largura}px, inclusive com erros no formulário`, async ({ page }) => {
        await page.setViewportSize({ width: largura, height: 900 });
        await page.goto(rota);
        const botao = page.locator('#reserva button[type=submit]');
        if (await botao.count()) await botao.click();
        const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
        expect(r.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([]);
      });
    }
  }
});

test.describe('conteúdo fiel à documentação do restaurante', () => {
  test('o cardápio mostra todos os pratos, por categoria, sem duplicatas e sem preços', async ({ page }) => {
    await page.goto('/cardapio/');
    await expect(page.locator('.categoria')).toHaveCount(cardapio.length);
    await expect(page.locator('.prato')).toHaveCount(totalPratos);
    for (const c of cardapio) await expect(page.locator(`#${c.id} .prato`)).toHaveCount(c.pratos.length);
    const nomes = await page.locator('.prato h3').allInnerTexts();
    expect(new Set(nomes).size).toBe(nomes.length);
    expect(nomes).toEqual(cardapio.flatMap((c) => c.pratos.map((p) => p.nome)));
    const texto = await page.locator('body').innerText();
    expect(texto).not.toMatch(/R\$|\breais\b/i);
  });
  test('os pratos sem descrição na documentação continuam sem descrição', async ({ page }) => {
    await page.goto('/cardapio/');
    for (const c of cardapio) for (const p of c.pratos.filter((x) => !x.descricao)) {
      await expect(page.locator('.prato', { has: page.getByRole('heading', { name: p.nome, exact: true }) }).locator('p')).toHaveCount(0);
    }
  });
  test('as descrições aparecem exatamente como na documentação', async ({ page }) => {
    await page.goto('/cardapio/');
    for (const c of cardapio) for (const p of c.pratos.filter((x) => x.descricao)) {
      await expect(page.locator('.prato', { has: page.getByRole('heading', { name: p.nome, exact: true }) }).locator('p')).toHaveText(p.descricao!);
    }
  });
  test('a home mostra os dados reais e não inventa horários nem a faixa de preço', async ({ page }) => {
    await page.goto('/');
    const t = await page.locator('body').innerText();
    for (const esperado of [negocio.endereco, negocio.cep, negocio.telefone, negocio.instagram, `${avaliacao.total} avaliações`, avaliacao.nota, ...['Refeições no local', 'Pedidos para viagem', 'Entrega sem contato']]) expect(t).toContain(esperado);
    expect(t).not.toMatch(/R\$|80 a|\b100\b/);
    expect(t).toContain('em confirmação'); // horários assumidos como pendentes
  });
  test('todo quadro de foto diz o que vai nele', async ({ page }) => {
    await page.goto('/');
    const quadros = page.locator('.quadro:not(:has(img))');
    const n = await quadros.count();
    expect(n).toBeGreaterThanOrEqual(5); // fachada, interior e 3 pratos: o que só o Santina pode mostrar
    for (let i = 0; i < n; i++) {
      const t = (await quadros.nth(i).innerText()).toLowerCase();
      expect(t).toContain('foto a enviar');
      expect(t.length).toBeGreaterThan(25);
    }
  });
});

test.describe('reserva pelo WhatsApp', () => {
  test('envio vazio mostra o resumo de erros com foco e links', async ({ page }) => {
    await page.goto('/');
    await page.locator('#reserva button[type=submit]').click();
    const resumo = page.locator('.rb__resumo');
    await expect(resumo).toBeVisible();
    await expect(resumo).toBeFocused();
    await expect(resumo.locator('a')).toHaveCount(2);
    await resumo.locator('a').first().click();
    await expect(page.locator('#f-data')).toBeFocused();
  });
  test('data no passado avisa ao mudar o campo', async ({ page }) => {
    await page.goto('/');
    await page.fill('#f-data', '2020-01-01');
    await page.locator('#f-data').dispatchEvent('change');
    await expect(page.locator('#e-data')).toContainText('não pode ser antes de hoje');
  });
  test('envio válido abre o WhatsApp do restaurante com a mensagem pronta', async ({ page }) => {
    await page.addInitScript(() => { (window as any).__aberto = null; window.open = ((url: string) => { (window as any).__aberto = url; return {} as Window; }) as typeof window.open; });
    await page.goto('/');
    await page.fill('#f-data', '2031-12-10');
    await page.fill('#f-hora', '19:30');
    await page.selectOption('#f-pessoas', '4');
    await page.fill('#f-nome', 'Ana');
    await page.locator('#reserva button[type=submit]').click();
    const url: string = await page.evaluate(() => (window as any).__aberto);
    expect(url.startsWith(`https://wa.me/${negocio.whatsapp}?text=`)).toBe(true);
    const msg = decodeURIComponent(url.split('?text=')[1]);
    expect(msg).toContain('Sou Ana'); expect(msg).toContain('4 pessoas'); expect(msg).toContain('10/12/2031'); expect(msg).toContain('19:30');
    await expect(page.locator('.rb__msg')).toContainText('WhatsApp do restaurante abriu');
  });
  test('com pop-up bloqueado avisa e oferece abrir, ligar e copiar', async ({ page }) => {
    await page.addInitScript(() => { window.open = (() => null) as typeof window.open; });
    await page.goto('/');
    await page.fill('#f-data', '2031-12-10'); await page.fill('#f-hora', '20:00');
    await page.locator('#reserva button[type=submit]').click();
    const msg = page.locator('.rb__msg');
    await expect(msg).toContainText('bloqueou');
    await expect(msg.getByRole('link', { name: 'Abrir o WhatsApp' })).toHaveAttribute('href', new RegExp(`^https://wa.me/${negocio.whatsapp}`));
    await expect(msg.getByRole('link', { name: /Ligar/ })).toHaveAttribute('href', negocio.telefoneLink);
    await expect(msg.getByRole('button', { name: 'Copiar mensagem' })).toBeVisible();
  });
});

test.describe('navegação e celular', () => {
  test('menu do celular abre, prende o foco e fecha com Esc', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const btn = page.locator('.hd__menu');
    await btn.click();
    await expect(btn).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#painel')).toBeVisible();
    await expect(page.locator('main')).toHaveJSProperty('inert', true);
    await page.keyboard.press('Escape');
    await expect(page.locator('#painel')).toBeHidden();
    await expect(btn).toBeFocused();
  });
  test('celular: barra fixa com reservar e ligar', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const barra = page.locator('.ligar');
    await expect(barra).toBeVisible();
    await expect(barra.locator(`a[href="${negocio.telefoneLink}"]`)).toBeVisible();
    await expect(barra.locator('a[href="/#reservas"]')).toBeVisible();
  });
  test('desktop: reservar e cardápio aparecem sem rolar', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.locator('.hero__acoes').getByRole('link', { name: textos.hero.reservar })).toBeInViewport();
    await expect(page.locator('.hero__acoes').getByRole('link', { name: textos.hero.cardapio })).toBeInViewport();
    await expect(page.locator('.ligar')).toBeHidden();
  });
  test('cardápio: menu fixo leva à categoria', async ({ page }) => {
    await page.goto('/cardapio/');
    await page.locator('.cats a', { hasText: 'Sobremesas' }).click();
    await expect(page).toHaveURL(/#sobremesas$/);
  });
});

test.describe('mídia ilustrativa de banco', () => {
  test('as imagens do ambiente carregam, têm texto alternativo e dizem que são ilustrativas', async ({ page }) => {
    await page.goto('/');
    const imgs = page.locator('.amb__grade img');
    const n = await imgs.count();
    expect(n).toBe(textos.ambiente.quadros.filter((q) => q.foto).length);
    for (let i = 0; i < n; i++) {
      await imgs.nth(i).scrollIntoViewIfNeeded();
      await expect.poll(() => imgs.nth(i).evaluate((e: HTMLImageElement) => e.complete && e.naturalWidth > 0)).toBe(true);
      expect(((await imgs.nth(i).getAttribute('alt')) ?? '').length).toBeGreaterThan(20);
    }
    await expect(page.locator('.amb__grade .quadro__etq')).toHaveCount(n);
    await expect(page.locator('.amb__grade .quadro__etq').first()).toContainText('ilustrativa');
  });
  test('o que só o Santina pode mostrar (fachada, interior, pratos) continua em quadro, sem foto de banco', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#historia img')).toHaveCount(0);
    await expect(page.locator('.dest img')).toHaveCount(0);
  });
  test.describe('vídeo da abertura', () => {
    test.skip(!temVideo, 'sem vídeo em public/videos');
    test('é identificado como ilustrativo, toca mudo e o botão pausa', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('.hero__legenda')).toHaveText(textos.hero.legendaVideo);
      const v = page.locator('[data-hero-video]');
      await expect.poll(() => v.evaluate((el: HTMLVideoElement) => !el.paused && el.muted)).toBe(true);
      await page.click('[data-hero-btn]');
      await expect(page.locator('[data-hero-btn]')).toHaveText('Reproduzir vídeo');
      expect(await v.evaluate((el: HTMLVideoElement) => el.paused)).toBe(true);
    });
    test('com "reduzir movimento" o vídeo não toca sozinho', async ({ browser }) => {
      const ctx = await browser.newContext({ reducedMotion: 'reduce' });
      const page = await ctx.newPage();
      await page.goto('/');
      await page.waitForTimeout(700);
      expect(await page.locator('[data-hero-video]').evaluate((el: HTMLVideoElement) => el.paused)).toBe(true);
      await expect(page.locator('[data-hero-btn]')).toHaveText('Reproduzir vídeo');
      await ctx.close();
    });
  });
});

test.describe('movimento', () => {
  test.describe('com "reduzir movimento"', () => {
    test.use({ reducedMotion: 'reduce' });
    test('todo o conteúdo já aparece', async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(600);
      const ocultos = await page.evaluate(() => [...document.querySelectorAll('[data-revelar], [data-hero-item]')].filter((e) => getComputedStyle(e).opacity !== '1').length);
      expect(ocultos).toBe(0);
    });
  });
  test('blocos animados continuam no texto acessível antes de aparecer', async ({ page }) => {
    await page.goto('/');
    const escondidos = await page.evaluate(() => [...document.querySelectorAll('[data-revelar], [data-hero-item]')].filter((e) => getComputedStyle(e).visibility === 'hidden').length);
    expect(escondidos).toBe(0);
  });
  test('ao rolar, os blocos animados terminam visíveis', async ({ page }) => {
    await page.goto('/');
    for (let y = 0; y < 8000; y += 500) { await page.mouse.wheel(0, 500); await page.waitForTimeout(110); }
    await page.waitForTimeout(1700);
    const ocultos = await page.evaluate(() => [...document.querySelectorAll('[data-revelar], [data-hero-item]')].filter((e) => getComputedStyle(e).opacity !== '1').length);
    expect(ocultos).toBe(0);
  });
});
