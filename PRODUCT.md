# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro estático (HTML pronto), CSS próprio e GSAP para movimento. Escolha delegada ao desenvolvimento, por velocidade, SEO e acessibilidade; reaproveita o modelo de sites já testado (conteúdo em `src/conteudo`, tema em `src/styles/tema.css`). Hospedagem prevista: Vercel.

## Users
- Moradores de Barretos e visitantes da cidade (a região recebe muitos viajantes) que procuram onde jantar ou almoçar bem. Chegam pelo celular, vindos do Google Maps, do Instagram ou de indicação.
- Casais, famílias e grupos que querem comemorar aniversários e ocasiões especiais (aparece nas avaliações; o serviço de eventos **não está confirmado**).
- Quem já conhece o restaurante e só quer ver o cardápio, o horário ou reservar.
(Inferido da documentação do cliente; público não foi entrevistado.)

## Product Purpose
Site institucional do **Santina Restaurante**, em Barretos (SP): apresentar a gastronomia, o ambiente e a experiência, divulgar o cardápio e levar à **reserva por WhatsApp**. Sucesso: quem chega ao site entende a proposta em segundos, lê o cardápio com conforto no celular e chama o restaurante.

## Positioning
Gastronomia contemporânea com inspiração italiana em um **casarão histórico** (conforme apresentação do Grupo Quatro G), com massas, carnes, risotos, frutos do mar, carta de vinhos, drinks e sobremesas. Um site de restaurante de bairro não copiaria o casarão nem esta carta.

## Operating Context
- Restaurante em Barretos: Rua Quatorze, 447, Centro, CEP 14780-040. Telefone e WhatsApp: (17) 99670-1204.
- Serviços indicados: refeições no local, pedidos para viagem, entrega sem contato.
- Horário observado no Google: fecha às 14h30 e reabre às 18h. **Dias e horários completos não confirmados.**
- Presença digital: Instagram `@santinarestaurante`; cardápio externo no Ola.click; o Google Maps não mostra site oficial (não assumir que não existe domínio).
- Cardápio oficial fornecido na documentação (34 pratos em 6 categorias; os 4 risotos não têm descrição).

## Capabilities and Constraints
- Reserva por WhatsApp (mensagem pronta); sem motor de reserva.
- **Não inventar:** preços, ingredientes, horários, eventos, fotos, história do casarão. O que falta é sinalizado como "a confirmar".
- Cardápio preservado como fornecido: sem preços, pratos repetidos aparecem uma vez, só erro ortográfico evidente é corrigido.
- Faixa de preço vista no Google (R$ 80 a R$ 100 por pessoa) **não é exibida** até o restaurante confirmar.
- Em aberto: logo oficial, paleta atual da marca, fotos dos pratos e do ambiente, horários, preços atualizados, link oficial de reservas, link do Instagram, domínio próprio, eventos, atualização do cardápio.

## Brand Commitments
- Nome: Santina Restaurante.
- **A logo oficial é a principal referência visual e institucional** (ainda a receber como arquivo neste repositório). Descrição dada pelo cliente: SANTINA em serifada elegante, moldura ornamental branca, RESTAURANTE em letras espaçadas, detalhe horizontal verde e vermelho, ramos decorativos verdes na parte inferior, fundo preto. Não recriar, redesenhar nem alterar a logo; usar o arquivo oficial, de preferência em superfícies escuras (fundo preto). Versão transparente ou para fundo claro só com autorização; registrar a necessidade.
- **Paleta vinculante (ponto de partida, pode ser refinado):** preto `#080808`, branco `#FFFFFF`, verde `#278348`, vermelho `#C83D43`, creme `#F2EEE6`. Preto e branco formam a base; verde e vermelho aparecem só como detalhes de identidade, sem lembrar a bandeira da Itália; creme em seções claras. **Não usar dourado nem vinho como cores principais** (substitui a paleta exploratória anterior).
- Tipografia: serifada elegante nos títulos (sugestão: Cormorant Garamond ou outra) e sans moderna no texto e na navegação (sugestão: Manrope ou outra); letras espaçadas nos elementos institucionais, como na logo.
- Direção: identidade clássica italiana + gastronomia contemporânea + design editorial sofisticado, composições minimalistas, animações discretas. Referências de qualidade (não de identidade): Casa Angelina, Bürgenstock Resort Lake Lucerne, One&Only Cape Town. **Nenhuma referência externa substitui a personalidade da marca.**
- Evitar: layout genérico de restaurante, muitos cartões pequenos, excesso de animação, fotos que não correspondam aos pratos.

## Evidence on Hand
- Documentação do cliente com cardápio completo, dados do estabelecimento e posicionamento.
- Avaliação no Google: **4,8 (299 avaliações)**. Comentários elogiam ambiente, carta de vinhos, comida, apresentação dos pratos, drinks e atendimento; há críticas pontuais a atendimento e a alguns pratos. Não serão usados como promessa publicitária.
- **Ausências que não podem ser inventadas:** fotos (pratos e ambiente), arquivo da logo (ainda não recebido), vídeo próprio, horários completos, preços, história do casarão, serviço de eventos.

## Product Principles
1. Verdade antes de efeito: nenhum dado, prato, preço ou foto fabricado.
2. O cardápio é o centro: legível no celular, navegável por categoria e fiel ao material do restaurante.
3. Um caminho curto até a reserva: WhatsApp à mão em qualquer ponto.
4. Sofisticação sem peso: velocidade e acessibilidade valem tanto quanto a direção de arte.
5. Quando faltar material, assumir a falta com elegância em vez de preencher o espaço.

## Accessibility & Inclusion
Padrão WCAG 2.2 AA: contraste de texto de 4,5:1, foco visível, leitura por leitor de tela, respeito a "reduzir movimento" e alvos de toque de 44 px. Português do Brasil.
