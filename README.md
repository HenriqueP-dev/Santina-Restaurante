# Santina Restaurante (site em desenvolvimento)

Site institucional do Santina Restaurante, Barretos (SP). **Projeto conceitual**, sem vínculo oficial até o restaurante confirmar os dados.
Astro estático, CSS próprio e GSAP.

## Documentos
- [`PRODUCT.md`](PRODUCT.md): quem é o restaurante, o que o site precisa fazer, o que não pode inventar.
- [`DESIGN.md`](DESIGN.md): análise da logo, paleta com contraste, tipografia, componentes e movimento.
- [`PENDENCIAS.md`](PENDENCIAS.md): o que ainda precisa de confirmação.
- [`CREDITOS.md`](CREDITOS.md): origem de imagens e fontes.

## Estrutura
- Conteúdo (dados, cardápio, textos): `src/conteudo/santina.ts` (formato em `tipos.ts`).
- Cores e fontes: `src/styles/tema.css`. Estrutura e componentes de estilo: `src/styles/global.css`.
- Páginas: `src/pages/index.astro` (home) e `src/pages/cardapio/index.astro`.
- Fotos: cada `Quadro.astro` é um espaço reservado. Para pôr a foto: `<Quadro foto="/fotos/arquivo.webp" alt="..." rotulo="..." />` (arquivos em `public/fotos/`).

## Rodar
```bash
npm install
npm run dev          # desenvolvimento
npm run build        # gera o site em dist/
npm run test:e2e     # testes: responsividade, acessibilidade (axe), cardápio, reserva
```
Primeira vez no computador: `npx playwright install chromium`.

## Reservas
O formulário monta a mensagem e abre `https://wa.me/5517996701204`. O número fica em `src/conteudo/santina.ts` (`whatsapp`).
