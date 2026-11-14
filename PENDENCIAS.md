# Pendências e confiabilidade das informações · Santina Restaurante

Regra do projeto: **nada inventado**. O site só afirma o que está na documentação do cliente; o resto aparece como "a confirmar".

## 1. Informado na documentação do cliente (usado no site)
- Nome, endereço (Rua Quatorze, 447, Centro, Barretos, SP, CEP 14780-040), telefone e WhatsApp (17) 99670-1204.
- Serviços: refeições no local, pedidos para viagem, entrega sem contato.
- Avaliação no Google: 4,8, com 299 avaliações (usada como número; comentários resumidos por tema, sem citação literal).
- Posicionamento: gastronomia contemporânea com inspiração italiana, em casarão histórico (conforme apresentação do Grupo Quatro G).
- Cardápio oficial: 34 pratos em 6 categorias (4 entradas, 5 massas, 10 carnes e aves, 7 peixes e frutos do mar, 4 risotos, 4 sobremesas), sem preços. Os 4 risotos não têm descrição no material original e continuam sem.
- Instagram `@santinarestaurante`.
- Horário observado no Google (fecha às 14h30 e reabre às 18h): mostrado **só como "em confirmação"**.

## 2. Informação vista em fontes externas
- Faixa de preço R$ 80 a R$ 100 por pessoa, no Google. **Não é exibida** no site até o restaurante confirmar.
- Ola.click aparece como cardápio externo. O link não foi informado e **não está no site**.
- O Google Maps não mostra site oficial. Isso não prova que o restaurante não tenha domínio: confirmar.

## 3. Precisa de confirmação do restaurante
| Item | Situação no site |
|---|---|
| Horários completos e dias de funcionamento | "Em confirmação", com a observação do Google |
| Preços atualizados do cardápio | Não exibidos; o cardápio não tem campo de preço |
| Se o cardápio fornecido continua atualizado | Usado como veio; avisado na página |
| Grafia "peixe branco congrio" (Risoto de Frutos do Mar) | Mantida como no material; talvez seja "congro" |
| Link oficial de reservas, se existir | Reserva por WhatsApp (17) 99670-1204 |
| Link correto do Instagram | Link montado a partir do usuário informado: **confirmar** |
| Link do cardápio no Ola.click | Fora do site |
| Domínio ou site anterior | Desconhecido |
| Serviço de eventos e comemorações | **Seção não criada** (a documentação pede para confirmar antes) |
| Texto sobre a história do casarão e do restaurante | Mostra um aviso "entra aqui quando o Santina confirmar" |
| Carta de vinhos e de drinks | Só citadas; sem itens |
| Como funciona a entrega sem contato | Só o nome do serviço |
| Logo em vetor (SVG) ou alta resolução; versão para fundo claro | Arquivo atual: PNG 500 x 500, fundo preto |
| Paleta oficial refinada (tons de texto verde e vermelho) | Proposta no DESIGN.md |
| Fotos do Santina: fachada, interior, pratos, bar, ambiente e vídeo de abertura | Hoje **todas** são de banco de imagens, ilustrativas, com etiqueta visível (12 fotos e 1 vídeo, listados em CREDITOS.md). Trocar pelas do restaurante. Pratos, fachada e interior de banco **não** correspondem ao Santina |

## Para fechar
1. O restaurante envia fotos, horários, preços (se quiser exibir), links e a logo em vetor.
2. Trocar cada quadro (`Quadro.astro`, prop `foto`) e remover o aviso de projeto conceitual.
3. `seo.indexar: true` em `src/conteudo/santina.ts` quando for publicar de verdade.
