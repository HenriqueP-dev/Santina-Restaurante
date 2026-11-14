#!/usr/bin/env bash
# Prepara o vídeo do topo da home a partir de um arquivo original.
#
# Uso:  scripts/preparar-video.sh caminho/do/original.mp4 [inicio_em_segundos] [duracao_em_segundos]
# Ex.:  scripts/preparar-video.sh videos-originais/campo.mp4 1 13
#
# Gera em public/videos/: hero.webm e hero.mp4 (720p, telas grandes), hero-sm.webm e hero-sm.mp4 (480p, celular)
# e hero-poster.webp (capa, igual ao primeiro quadro). Sem áudio, 24 quadros por segundo.
# O site só baixa o vídeo depois que a página carrega, e a versão certa para a tela (ver HeroVideo.astro).
# Alvo: WebM de 720p até ~400 KB e de 480p até ~250 KB.
#
# Repetição suave (padrão): os últimos instantes se dissolvem nos primeiros, então o vídeo
# volta ao começo sem "salto". O vídeo final fica FADE segundos mais curto que o trecho cortado.
# Para desligar: LOOP_SUAVE=0 scripts/preparar-video.sh ...   Para mudar a dissolução: FADE=2 ...
# Para mudar a qualidade (maior número = menor arquivo): CRF_MP4=34 CRF_WEBM=50 ...
set -euo pipefail

ENTRADA="${1:?Informe o arquivo de vídeo original. Ex.: scripts/preparar-video.sh videos-originais/campo.mp4 1 13}"
INICIO="${2:-0}"
DURACAO="${3:-10}"
LOOP_SUAVE="${LOOP_SUAVE:-1}"
FADE="${FADE:-1.5}"
CRF_MP4="${CRF_MP4:-32}"
CRF_WEBM="${CRF_WEBM:-46}"
SAIDA="$(cd "$(dirname "$0")/.." && pwd)/public/videos"

command -v ffmpeg >/dev/null || { echo "ffmpeg não encontrado. Instale em https://ffmpeg.org/download.html"; exit 1; }
[ -f "$ENTRADA" ] || { echo "Arquivo não encontrado: $ENTRADA"; exit 1; }
mkdir -p "$SAIDA"

BASE="fps=24"
if [ "$LOOP_SUAVE" = "1" ]; then
  FIM=$(awk -v d="$DURACAO" -v f="$FADE" 'BEGIN { printf "%.3f", d - f }')
  if awk -v d="$DURACAO" -v f="$FADE" 'BEGIN { exit !(d <= 3 * f) }'; then
    echo "Trecho curto demais para a repetição suave (use pelo menos 3x o FADE). Usando LOOP_SUAVE=0."
    LOOP_SUAVE=0
  fi
fi

# gera uma versão na altura dada (720 ou 480): $1 = altura, $2 = sufixo do arquivo ("" ou "-sm")
gerar() {
  local ALT="$1" SUF="$2"
  local ESC="scale=-2:${ALT}:flags=lanczos,format=yuv420p"
  local ARGS
  if [ "$LOOP_SUAVE" = "1" ]; then
    local F="[0:v]${BASE},${ESC},split=3[a][b][c];[a]trim=start=${FADE}:end=${FIM},setpts=PTS-STARTPTS[meio];[b]trim=start=${FIM},setpts=PTS-STARTPTS[cauda];[c]trim=start=0:end=${FADE},setpts=PTS-STARTPTS[cabeca];[cauda][cabeca]xfade=transition=fade:duration=${FADE}:offset=0[mix];[meio][mix]concat=n=2:v=1:a=0[v]"
    ARGS=(-filter_complex "$F" -map "[v]")
  else
    ARGS=(-vf "${BASE},${ESC}")
  fi
  echo "Gerando ${ALT}p (MP4 e WebM)..."
  ffmpeg -y -loglevel error -ss "$INICIO" -t "$DURACAO" -i "$ENTRADA" -an "${ARGS[@]}" \
    -c:v libx264 -preset slow -crf "$CRF_MP4" -pix_fmt yuv420p -movflags +faststart "$SAIDA/hero${SUF}.mp4"
  ffmpeg -y -loglevel error -ss "$INICIO" -t "$DURACAO" -i "$ENTRADA" -an "${ARGS[@]}" \
    -c:v libvpx-vp9 -b:v 0 -crf "$CRF_WEBM" -row-mt 1 -deadline good -cpu-used 2 "$SAIDA/hero${SUF}.webm"
}
gerar 720 ""
gerar 480 "-sm"

echo "Gerando a capa (primeiro quadro do vídeo final)..."
ffmpeg -y -loglevel error -i "$SAIDA/hero.webm" -frames:v 1 -vf "scale=1280:-2" -c:v libwebp -quality 68 "$SAIDA/hero-poster.webp"
rm -f "$SAIDA/hero-poster.jpg"

echo
DUR_FINAL=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SAIDA/hero.mp4" | awk '{ printf "%.1f", $1 }')
echo "Duração final: ${DUR_FINAL} s"
for f in hero.webm hero.mp4 hero-sm.webm hero-sm.mp4 hero-poster.webp; do
  tam=$(wc -c < "$SAIDA/$f")
  printf "%-18s %6d KB\n" "$f" "$((tam / 1024))"
done
echo
echo "Pronto. Rode o build e confira o topo da home. Lembre de anotar a fonte e a licença em CREDITOS.md."
