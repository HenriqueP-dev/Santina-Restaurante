/**
 * Movimento do site, sem biblioteca: IntersectionObserver + transições de CSS.
 * Só anima opacity e transform (compositor), nunca layout, e nunca esconde o conteúdo para leitores de tela.
 * Com "reduzir movimento" o script nem liga (a classe `mov` não existe) e tudo já aparece.
 * O CSS dos estados está em global.css (.mov ... .on).
 */
const raiz = document.documentElement;

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  raiz.classList.add('mov-ok');
  const revela = (el: Element) => requestAnimationFrame(() => el.classList.add('on'));

  // 1. Topo: o fundo aparece e o texto sobe em sequência.
  const fundo = document.querySelector('[data-hero-quadro]');
  if (fundo) revela(fundo);
  document.querySelectorAll<HTMLElement>('[data-hero-item]').forEach((el, i) => {
    el.style.setProperty('--atraso', `${0.35 + i * 0.12}s`);
    revela(el);
  });

  // 2. Revelações ao rolar: cada bloco entra uma vez, quando 12% da altura da tela já o cobre.
  const alvos = document.querySelectorAll('[data-revelar], [data-revelar-foto]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((itens) => {
      for (const it of itens) if (it.isIntersecting) { it.target.classList.add('on'); io.unobserve(it.target); }
    }, { rootMargin: '0px 0px -12% 0px' });
    alvos.forEach((el) => io.observe(el));
  } else {
    alvos.forEach((el) => el.classList.add('on'));
  }
}
