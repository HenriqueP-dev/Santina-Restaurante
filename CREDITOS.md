# Créditos de imagens, fontes e vídeos

| Arquivo | Onde aparece | Origem | Autor | Licença | Provisório? |
|---|---|---|---|---|---|
| `public/logo-santina.png` | Cabeçalho e rodapé | Logo oficial enviada pelo cliente | Santina Restaurante | Marca do cliente | Não (pedir versão vetorial) |
| Sorts Mill Goudy (Fontsource `@fontsource/sorts-mill-goudy`) | Títulos | Google Fonts | Barry Schwartz | SIL Open Font License 1.1 | Não |
| Manrope (Fontsource `@fontsource-variable/manrope`) | Texto e navegação | Google Fonts | Mikhail Sharanda | SIL Open Font License 1.1 | Não |

## Mídia ilustrativa de banco (NÃO mostra o Santina)

Usada só onde não afirma nada sobre o restaurante, e sempre com a etiqueta visível "ilustrativa" no site.

| Arquivo | Onde aparece | Origem (link) | Autor | Licença | Provisório? |
|---|---|---|---|---|---|
| `public/videos/hero.mp4`, `hero.webm`, `hero-poster.jpg` | Abertura da home | https://mixkit.co/free-stock-video/classically-styled-restaurant-4195/ ("Classically styled restaurant", clipe 4195) | Não informado na página do clipe | Mixkit Stock Video Free License (página mostra a licença **Free**, conferida em 14/11/2026): uso comercial e não comercial, modificação permitida, crédito não obrigatório | **Sim**, até o vídeo do restaurante |
| `public/fotos/ambiente-salao-mesas-postas.webp` | O ambiente | https://www.pexels.com/photo/set-tables-in-an-empty-restaurant-12688961/ | Vidal Balielo Jr. | Pexels License (uso gratuito, inclusive comercial) | **Sim** |
| `public/fotos/ambiente-mesa-a-luz-de-velas.webp` | O ambiente | https://www.pexels.com/photo/table-in-an-elegant-restaurant-19569909/ | Zişan Özdemir | Pexels License | **Sim** |
| `public/fotos/ambiente-tacas-e-mesa-branca.webp` | O ambiente | https://www.pexels.com/photo/wine-glasses-on-table-10445929/ | Anastasia Lashkevich | Pexels License | **Sim** |
| `public/fotos/ambiente-mesas-em-penumbra.webp` | O ambiente | https://www.pexels.com/photo/elegant-dining-setting-in-dimly-lit-restaurant-34723813/ | Miguel Rivera | Pexels License | **Sim** |
| `public/fotos/historia-fachada.webp` | Nossa história (fachada) | https://www.pexels.com/photo/exterior-of-a-mansion-9895987/ | Enzo Varsi | Pexels License | **Sim** |
| `public/fotos/historia-salao.webp` | Nossa história (interior) | https://www.pexels.com/photo/tables-in-an-empty-restaurant-11794317/ | Hernán Santarelli | Pexels License | **Sim** |
| `public/fotos/prato-massas.webp` | Experiência e Cardápio (Massas) | https://www.pexels.com/photo/traditional-italian-fettuccine-alfredo-pasta-on-ceramic-plate-11220208/ | Engin Akyurt | Pexels License | **Sim** |
| `public/fotos/prato-carnes.webp` | Experiência e Cardápio (Carnes e aves) | https://www.pexels.com/photo/selective-focus-photography-of-cooked-food-1639561/ | Valeria Boltneva | Pexels License | **Sim** |
| `public/fotos/prato-sobremesa.webp` | Experiência e Cardápio (Sobremesas) | https://www.pexels.com/photo/baked-dessert-3301907/ | Mattia Marcassoli | Pexels License | **Sim** |
| `public/fotos/prato-entrada.webp` | Cardápio (Entradas) | https://www.pexels.com/photo/bread-with-cheese-on-plate-16594947/ | Nadin Sh | Pexels License | **Sim** |
| `public/fotos/prato-peixes.webp` | Cardápio (Peixes e frutos do mar) | https://www.pexels.com/photo/cooked-fish-with-two-green-leaf-on-round-white-ceramic-plate-676560/ | Robert Bogdan | Pexels License | **Sim** |
| `public/fotos/prato-risoto.webp` | Cardápio (Risotos) | https://www.pexels.com/photo/rice-with-peas-6129128/ | Alesia Kozik | Pexels License | **Sim** |

Como o vídeo foi preparado: original Full HD de 74 s; recorte de 18 s (a partir de 52 s) mantendo só a metade direita do quadro, para **não aparecer o adesivo com nome de outro restaurante que existe na vidraça**; ampliado para 1920 x 1080, sem áudio, 24 quadros por segundo, repetição suave (dissolução de 1,5 s). Resultado de 15,5 s, cerca de 1 MB por formato. Comando: `CRF_MP4=33 CRF_WEBM=45 scripts/preparar-video.sh recorte.mp4 0 17`.

Fotos descartadas por mostrar marca (letreiro luminoso, rótulo de garrafa) ou pessoas identificáveis.

**Nenhuma foto ou vídeo é do Santina.** Todos os espaços de foto estão preenchidos com imagens de banco, cada uma com a etiqueta visível "Imagem ilustrativa, não é o Santina" (ou "não é um prato do Santina"). Quando o restaurante enviar o material, cada imagem é trocada. Cada foto nova entra aqui com origem, autor e licença, e só vai ao site público com autorização do restaurante.
