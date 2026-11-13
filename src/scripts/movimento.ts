/**
 * Movimento do site (GSAP + ScrollTrigger): entrada do topo, revelações discretas e quadros que se abrem.
 * Usa só opacity e transform (nunca visibility): o conteúdo segue legível para leitores de tela antes de aparecer.
 * Tudo dentro de gsap.matchMedia: com "reduzir movimento", nada disso roda e o conteúdo já está visível.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const raiz = document.documentElement;
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  raiz.classList.add('mov-ok');

  // 1. Topo: o quadro de abertura aparece e o texto sobe em sequência.
  const itens = gsap.utils.toArray<HTMLElement>('[data-hero-item]');
  if (itens.length) {
    gsap.timeline({ defaults: { ease: 'expo.out' } })
      .fromTo('[data-hero-quadro]', { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power1.out' })
      .fromTo(itens, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 1.3, stagger: 0.12 }, '-=0.7');
  }

  // 2. Revelações discretas: blocos marcados sobem e aparecem; quadros se abrem por máscara.
  gsap.utils.toArray<HTMLElement>('[data-revelar]').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });
  gsap.utils.toArray<HTMLElement>('[data-revelar-foto]').forEach((el) => {
    gsap.fromTo(el, { clipPath: 'inset(12% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
  });

  return () => raiz.classList.remove('mov-ok');
});

// Recalcula as posições depois que fontes e imagens mudam a altura da página.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
addEventListener('load', () => ScrollTrigger.refresh());
