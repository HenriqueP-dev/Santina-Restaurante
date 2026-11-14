/**
 * Detecta, na hora do build, quais arquivos do vídeo da abertura existem em public/videos/.
 * Sem arquivos, a abertura usa o quadro de foto. Com arquivos, usa o vídeo. Nada a configurar.
 * Os arquivos são gerados por scripts/preparar-video.sh:
 *   hero.webm / hero.mp4        (720p, telas grandes)
 *   hero-sm.webm / hero-sm.mp4  (480p, celular)
 *   hero-poster.webp            (capa, igual ao primeiro quadro)
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const existe = (caminho: string) => existsSync(join(process.cwd(), 'public', caminho));

export const temWebm = existe('videos/hero.webm');
export const temMp4 = existe('videos/hero.mp4');
export const temVideoHero = temWebm || temMp4;
export const temPosterHero = existe('videos/hero-poster.webp');
export const temWebmSm = existe('videos/hero-sm.webm');
export const temMp4Sm = existe('videos/hero-sm.mp4');
