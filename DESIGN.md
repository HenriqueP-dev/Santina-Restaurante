# Identidade visual e design system · Santina Restaurante

A **logo oficial é a referência principal**. Este documento registra como o site a aplica. Nenhuma referência externa (Casa Angelina, Bürgenstock, One&Only) substitui a personalidade da marca: elas inspiram fotografia, composição, espaçamento e ritmo, nunca a identidade.

## 1. Análise da logo oficial

Arquivo: `public/logo-santina.png` (enviado pelo cliente). **Não é alterado, redesenhado nem recolorido.**

| Fato do arquivo | Valor |
|---|---|
| Formato | PNG 500 x 500 px, RGB, **sem transparência** |
| Fundo | preto puro **#000000** |
| Conteúdo | do pixel x 24 a 475 e y 182 a 363 (a logo ocupa cerca de 36% da altura da imagem) |
| Elementos | SANTINA em serifada elegante; moldura ornamental branca (cartela com recortes nos cantos); RESTAURANTE em letras espaçadas; faixa horizontal verde, branca e vermelha; ramos de oliveira verdes na base |
| Personalidade | clássica, elegante, referência italiana; sem ouro nem vinho |

Como o site a usa:
- **Sempre sobre superfície #000000.** Como o arquivo tem fundo preto sólido, qualquer outro preto mostraria um retângulo. Por isso o preto do site é `#000000` (refinado do `#080808` sugerido).
- **Recorte só por CSS**: o arquivo vai inteiro; a margem preta em volta é escondida por `overflow` (componente `Logo.astro`, janela de 464 x 193 px com 6 px de folga). A proporção 1:1 do arquivo é preservada (há teste).
- **Tamanhos:** cabeçalho 10,5 rem de largura, rodapé 14 rem. Abaixo de 150 px de largura o RESTAURANTE fica ilegível.
- **Destaque sem competir:** a logo fica no cabeçalho e no rodapé, nunca sobre fotografias.
- **Limite do arquivo:** 500 px de lado é pouco para telas grandes. **Necessidade registrada:** logo em vetor (SVG) ou PNG de alta resolução; e, se o cliente quiser a logo sobre fundo claro, uma versão com fundo transparente ou uma versão para fundo claro (precisa de autorização para existir).

## 2. Paleta

Base preta e branca; verde e vermelho só como detalhe de identidade (nunca a bandeira da Itália inteira); creme em seções claras. **Dourado e vinho não são cores do projeto.**

| Papel | Nome | HEX | Uso |
|---|---|---|---|
| Base escura | `--preto` | `#000000` | cabeçalho, abertura, avaliações, rodapé, barra do celular |
| Base clara | `--branco` | `#FFFFFF` | seções claras, cartão do formulário |
| Seção clara quente | `--creme` | `#F2EEE6` | experiência, reservas, categorias pares do cardápio |
| Identidade 1 | `--verde` | `#278348` | botão Reservar, filete, sublinhados |
| Identidade 2 | `--vermelho` | `#C83D43` | filete |
| Texto pequeno verde | `--verde-texto` | `#237540` | rótulos e ícones sobre claro |
| Texto pequeno vermelho | `--vermelho-texto` | `#B4363C` | erros do formulário |
| Verde sobre preto | `--verde-claro` | `#4FB06F` | rótulos e a nota 4,8 sobre fundo preto |
| Hover do verde | `--verde-fundo` | `#1F6839` | botões em hover |
| Título | `--tinta` | `#080808` | títulos sobre claro |
| Texto | `--texto` | `#2B2A27` | texto corrido sobre claro |
| Texto secundário | `--texto-2` | `#5A564E` | legendas, notas |
| Linhas | `--areia` | `#D8D2C4` | divisores sobre claro |
| Secundário sobre preto | `--claro-sobre-preto` | `#B9B6AE` | notas sobre fundo preto |

### Contraste medido (mínimo 4,5:1 texto pequeno, 3:1 texto grande e controles)

| Combinação | Razão |
|---|---|
| branco / preto | 20,0:1 |
| creme / preto | 17,3:1 |
| tinta / creme | 17,3:1 |
| texto / creme | 12,4:1 |
| texto-2 / creme | 6,3:1 |
| verde `#278348` / branco | 4,74:1 (texto branco sobre botão verde passa) |
| verde `#278348` / creme | 4,10:1 (**não** para texto pequeno: usar `--verde-texto`, 4,92:1) |
| vermelho `#C83D43` / creme | 4,32:1 (**não** para texto pequeno: usar `--vermelho-texto`, 5,14:1) |
| verde / preto | 4,22:1 e vermelho / preto 4,01:1 (só filetes e ornamentos; texto pequeno sobre preto usa `--verde-claro`, 7,8:1) |

Os dois tons escuros de texto são **refinamentos autorizados** ("refinar conforme necessário") dos hex oficiais; os hex originais continuam nos filetes, botões e ornamentos.

## 3. Tipografia

| Voz | Fonte | Onde |
|---|---|---|
| Títulos e nomes de pratos | **Sorts Mill Goudy** (400 e itálico) | h1, h2, h3, nomes no cardápio, frases grandes |
| Texto, navegação, botões | **Manrope** (variável) | parágrafos, menu, formulário |
| Institucional | Manrope em **caixa alta, 600, letras espaçadas** (`.tracado`, `.rotulo`) | rótulos, menu, botões: eco do RESTAURANTE da logo |

Escolha: foram renderizadas lado a lado com a logo Cormorant Garamond, EB Garamond, Libre Caslon, Sorts Mill Goudy, GFS Didot, Marcellus, Cinzel e Playfair SC. A SANTINA da logo tem contraste moderado e pontas levemente abertas; **a Sorts Mill Goudy é a mais próxima** e fica legível em tamanho de prato (a Cormorant, sugerida no briefing, é muito leve e fina em corpo pequeno). Manrope foi mantida como sugerida. Ambas têm licença aberta (SIL OFL) via Fontsource.

Escala: display `clamp(2.4rem → 5rem)`, h2 `clamp(2.1rem → 3.75rem)`, h3 `clamp(1.4rem → 1.9rem)`, texto 1 rem / 1,7, rótulos 0,75 rem.

## 4. Vocabulário da logo: o filete e a placa

A logo tem duas peças que o site reutiliza, cada uma **com a mesma função que tem nela**:

- **Filete tricolor** (3 px: verde, branco/areia, vermelho). Na logo, separa o nome (SANTINA) do descritivo (RESTAURANTE). No site, só aparece nessa função: entre um título e o descritivo em caixa alta (título do cardápio; endereço + "Centro · Barretos · SP"). Nunca como enfeite abaixo de um h2 qualquer nem dentro de quadros.
- **Placa** (`.placa`): o contorno da logo, com cantos de cima arredondados e cantos de baixo entalhados, traço branco em fundo escuro e preto em fundo claro. Emoldura só o que merece peso: a **abertura** (a janela do vídeo, sobre preto, sem véu), a **ação** (o formulário de reserva) e a **prova** (a nota 4,8 do Google). Mais de três usos por página diluem o efeito.

**Sem eyebrow.** Os rótulos em caixa alta acima de cada h2 foram removidos: viravam fórmula (rótulo, título, parágrafo) repetida em todas as seções. Caixa alta espaçada fica para o descritivo do filete, a navegação e os botões.

## 5. Superfícies e ritmo

Alterna **preto → branco → creme → branco → preto → creme → branco → preto** (abertura, história, experiência, ambiente, avaliações, reservas, localização, rodapé). Seções de peso e composição diferentes: história ampla com foto fixa; experiência com sumário da carta (nomes com pontilhado e contagem) ao lado de três fotos escalonadas; ambiente em que o texto é uma célula do mosaico; avaliações em escala enorme dentro da placa; cardápio denso e tipográfico. Alturas de seção variam (ampla / padrão / compacta). Sem cartões pequenos em grade: listas com linhas finas e quadros grandes.

## 6. Componentes

| Componente | Regra |
|---|---|
| Cabeçalho (`Header.astro`) | preto, fixo, logo centralizada, menu de 4 links e botão **Reservar** verde; no celular, botão Menu e painel preto com foco preso |
| Barra do celular (`BarraLigar.astro`) | Reservar (verde) e Ligar com o número, fixa embaixo |
| Abertura (`index.astro`) | quadro de foto em tela cheia; título, lead e dois botões sobre véu preto no pé do quadro |
| Quadro de foto (`Quadro.astro`) | espaço reservado com a descrição do que vai nele ("Foto a enviar") e moldura interna fina. **Troca por foto real** com `foto="/fotos/arq.webp"` e `alt` |
| Botões (`.btn`) | primário claro: preto; sobre preto: branco; **verde**: Reservar; `--linha`: contorno. Texto 12 px, maiúsculas espaçadas, 52 px de altura |
| Link (`.link`) | sublinhado verde que cresce no hover |
| Cardápio (`/cardapio/`) | menu fixo por categoria com marca da categoria visível; por categoria: título e quadro à esquerda (fixos no desktop), lista de pratos à direita com linhas finas; risotos só com nome |
| Reserva (`ReservaMesa.astro`) | data, horário, pessoas e nome opcional; abre o WhatsApp do restaurante com a mensagem pronta; avisa pop-up bloqueado; alternativas de ligar e copiar |
| Avaliações | frase gigante com a nota em verde claro, temas em colunas, nota de rodapé honesta |
| Rodapé | preto, logo maior, endereço, telefone, Instagram |

## 6b. Mídia ilustrativa (regra)
A pedido do cliente, **todos os espaços de foto estão preenchidos** com imagens de banco (vídeo da abertura, história, experiência, ambiente e uma imagem por categoria do cardápio). Como nenhuma é do Santina, cada uma traz a etiqueta visível "Imagem ilustrativa, não é o Santina" (nos pratos: "não é um prato do Santina"), e as legendas das fotos de pratos mostram só a categoria e a contagem, nunca o nome de um prato, para não sugerir que aquela foto é aquele prato. O crédito está em `CREDITOS.md`. O componente `Quadro` continua aceitando o espaço reservado quando não há imagem. Marcas, letreiros e pessoas identificáveis são motivo para descartar a imagem.

## 7. Movimento
Sem biblioteca: `src/scripts/movimento.ts` (IntersectionObserver) coloca a classe `.on`, e as transições estão em `global.css`. Entrada do fundo e do texto da abertura, revelações ao rolar, foto que assenta de 1,06 para 1 dentro da moldura. Só `opacity` e `transform`. Desligado com "reduzir movimento" (o conteúdo já aparece).

## 8. Inconsistências encontradas no projeto herdado do modelo de hotel (e como foram resolvidas)

| Encontrado | Resolução |
|---|---|
| Bodoni Moda e Jost; paleta amarelo/vermelho/branco de outro cliente | trocadas por Sorts Mill Goudy, Manrope e a paleta da logo |
| Tokens com nomes de outra marca (`--ouro`, `--grafite`) | renomeados por função (`--verde`, `--tinta`...) |
| Header claro; logo do outro cliente | cabeçalho preto, logo do Santina sobre #000000 |
| Texto e páginas de hotel (acomodações, pontos turísticos, check-in) | removidos; cardápio, reservas de mesa e localização |
| Formulário de hospedagem (chegada, saída, hóspedes) | trocado por reserva de mesa |
| Vídeo ilustrativo do modelo | removido; depois, a pedido do cliente, entrou um vídeo e 4 fotos de ambiente **de banco**, sempre com etiqueta "ilustrativa" |

## 9. Pendências de identidade
- Logo em vetor (SVG) ou PNG de alta resolução; versão para fundo claro, se desejada.
- Fotos de pratos e do ambiente (os quadros mostram onde entram).
- Conferir com o cliente a paleta refinada (`--verde-texto`, `--vermelho-texto`, `--verde-claro`).

## Notas da rodada de crítica (2026-11)

- Sorts Mill Goudy tem algarismos antigos, que deixavam o telefone ilegível. Números de contato, contagens e a nota usam Manrope com algarismos tabulares (`.num-sans`).
- O aviso "a história entra quando o Santina confirmar" saiu da página; a pendência continua em `PENDENCIAS.md`.
- Abertura (versão atual): vídeo em tela cheia, mas sem véu uniforme. Um degradê escurece só o lado do texto (88% a 70%) e deixa o resto do vídeo claro; o contorno da placa da logo, em linha fina, emoldura a cena; o texto fica centralizado na vertical, não colado embaixo. A tentativa anterior (palco preto com o vídeo numa janela) foi descartada a pedido. No celular o degradê vai de baixo para cima e o botão de pausa fica abaixo da etiqueta.
- Foto da fachada: reexportada do original do Pexels já cortada em 4:5 (1100 px, qualidade 64, 237 KB; antes 649 KB) e com versão de 640 px (96 KB) por `srcset` para o celular.

## Desempenho (rodada de otimização)

Medido com CPU 4x mais lenta, antes e depois (bytes sem compressão do servidor): home no desktop 1905 para 692 KB, no celular 2044 para 855 KB, cardápio 515 para 183 KB (desktop) e 235 KB (celular).

- **Fotos:** `scripts/otimizar-fotos.mjs` gera AVIF em 480/800/1280 px; `Quadro.astro` monta `<picture>` com `srcset` e `sizes` e deixa o webp como reserva. Nenhuma foto é ampliada.
- **Vídeo:** 720p (WebM 329 KB) e 480p para celular (194 KB), MP4 de reserva; capa em WebP de 42 KB. O vídeo não é baixado no carregamento: só depois do evento `load`, e nunca com economia de dados ou "reduzir movimento". CRF escolhido comparando quadros com o original (a imagem de origem já era suave).
- **Logo:** o PNG oficial segue intacto (mesmos bytes). O site serve ao lado um WebP **sem perda**, idêntico pixel a pixel (conferido), 27 KB contra 64 KB.
- **JS:** GSAP e ScrollTrigger (112 KB) removidos. Fontes do topo com `preload`; itálico não usado removido.
- **Cache:** `vercel.json` com cache de 1 dia (+7 de revalidação) para fotos, vídeos e logo. Curto de propósito: quando entrarem as fotos reais com o mesmo nome, aparecem em até um dia.
