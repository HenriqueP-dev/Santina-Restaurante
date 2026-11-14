#!/usr/bin/env node
/**
 * Gera as variantes leves das fotos do site: AVIF em 480, 800 e 1280 px de largura.
 *
 * Uso:   node scripts/otimizar-fotos.mjs            (todas)
 *        node scripts/otimizar-fotos.mjs prato-massas   (só uma, pelo nome sem extensão)
 *
 * Entrada: para cada foto "nome", usa o ORIGINAL em fotos-originais/nome.(jpg|jpeg|png|webp) se existir
 * (melhor qualidade, fica só no seu computador) ou, se não, o arquivo public/fotos/nome.webp.
 * Saída: public/fotos/nome-480.avif, nome-800.avif, nome-1280.avif. O nome.webp continua sendo o
 * arquivo "mestre" e o reserva para navegadores sem AVIF. Quadro.astro encontra as variantes sozinho.
 * Nunca aumenta a imagem: só gera larguras menores ou iguais à da origem.
 */
import { readdirSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const PUBLIC = join(process.cwd(), 'public/fotos');
const ORIG = join(process.cwd(), 'fotos-originais');
const LARGURAS = [480, 800, 1280];
const QUALIDADE = Number(process.env.AVIF_Q ?? 50);
const filtro = process.argv[2];

const nomes = readdirSync(PUBLIC)
  .filter((f) => f.endsWith('.webp') && !/-\d+\.webp$/.test(f))
  .map((f) => basename(f, '.webp'))
  .filter((n) => !filtro || n === filtro);

let antes = 0, depois = 0;
for (const nome of nomes) {
  const original = ['jpg', 'jpeg', 'png', 'webp'].map((e) => join(ORIG, `${nome}.${e}`)).find(existsSync);
  const origem = original ?? join(PUBLIC, `${nome}.webp`);
  const meta = await sharp(origem).metadata();
  antes += statSync(join(PUBLIC, `${nome}.webp`)).size;
  const saidas = [];
  for (const w of LARGURAS.filter((l) => l <= (meta.width ?? 0))) {
    const arq = join(PUBLIC, `${nome}-${w}.avif`);
    await sharp(origem).resize({ width: w }).avif({ quality: QUALIDADE, effort: 6 }).toFile(arq);
    saidas.push(`${w}px ${Math.round(statSync(arq).size / 1024)} KB`);
    if (w === 800) depois += statSync(arq).size;
  }
  console.log(`${nome.padEnd(34)} ${original ? '(original)' : '(mestre)  '} ${saidas.join(' · ')}`);
}
console.log(`\nMestres em webp somados: ${Math.round(antes / 1024)} KB. Variantes de 800 px somadas: ${Math.round(depois / 1024)} KB.`);
