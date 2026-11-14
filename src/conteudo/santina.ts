/**
 * CONTEÚDO DO CLIENTE: Santina Restaurante (Barretos/SP).
 * Fonte: documentação do projeto enviada pelo cliente. Nada aqui é inventado:
 * o que falta está em PENDENCIAS.md e aparece no site como "a confirmar".
 */
import type { Negocio, Categoria, Servico, Avaliacao, Seo, Textos } from './tipos';

export const negocio: Negocio = {
  nome: 'Santina Restaurante',
  descritor: 'Restaurante',
  cidade: 'Barretos',
  uf: 'SP',
  endereco: 'Rua Quatorze, 447',
  bairro: 'Centro',
  cep: '14780-040',
  enderecoCompleto: 'Rua Quatorze, 447, Centro, Barretos, SP, CEP 14780-040',
  telefone: '(17) 99670-1204',
  telefoneLink: 'tel:+5517996701204',
  telefoneIntl: '+55 17 99670-1204',
  whatsapp: '5517996701204',
  instagram: '@santinarestaurante',
  instagramUrl: 'https://www.instagram.com/santinarestaurante/', // link montado a partir do usuário informado: confirmar
  mapaLink: 'https://www.google.com/maps/search/?api=1&query=Rua+Quatorze+447+Centro+Barretos+SP',
  logo: '/logo-santina.png',
  logoAlt: 'Santina Restaurante',
};

export const servicos: Servico[] = [
  { id: 'local', nome: 'Refeições no local' },
  { id: 'viagem', nome: 'Pedidos para viagem' },
  { id: 'entrega', nome: 'Entrega sem contato' },
];

/** Cardápio oficial, como fornecido pelo restaurante. Sem preços. Risotos sem descrição no material original. */
export const cardapio: Categoria[] = [
  {
    id: 'entradas', nome: 'Entradas',
    foto: { src: '/fotos/prato-entrada.webp', alt: 'Três torradas com cobertura de queijo, presunto e tomate em um prato branco.' },
    pratos: [
      { nome: 'Bruschetta de Parma', descricao: 'Pão italiano tipo torrada com cream cheese, cebola caramelizada, parma fatiado, amêndoas laminadas e cebolinha.' },
      { nome: 'Isca Santina', descricao: 'Ancho grelhado com cebola e tomate-cereja.' },
      { nome: 'Burrata ao Pesto', descricao: 'Seis pães italianos tipo torrada, queijo burrata, molho pesto de manjericão e tomate-cereja.' },
      { nome: 'Salada Santina com Parma', descricao: 'Alface crespa, mussarela de búfala, tomate-cereja, lascas de parma e amêndoas tostadas na manteiga com páprica defumada.' },
    ],
  },
  {
    id: 'massas', nome: 'Massas',
    foto: { src: '/fotos/prato-massas.webp', alt: 'Prato de fettuccine cremoso em um prato de cerâmica, visto de cima.' },
    pratos: [
      { nome: 'Fettuccine ao Pomodoro', descricao: 'Massa artesanal acompanhada de molho pomodoro fresco e folhas de manjericão, com parmesão e queijo tipo grana ralado.' },
      { nome: 'Fettuccine ao Molho Funghi', descricao: 'Macarrão tipo fettuccine ao molho de funghi porcini.' },
      { nome: 'Fettuccine ao Pesto', descricao: 'Macarrão tipo fettuccine ao pesto com mussarela de búfala.' },
      { nome: 'Fettuccine ao Molho de Três Queijos', descricao: 'Macarrão tipo fettuccine ao molho bechamel com queijo parmesão, gorgonzola e queijo tipo grana.' },
      { nome: 'Fettuccine à Carbonara', descricao: 'Macarrão tipo fettuccine com oito gemas de ovos, queijo parmesão, pimenta-preta e crisp de parma.' },
    ],
  },
  {
    id: 'carnes-e-aves', nome: 'Carnes e aves',
    foto: { src: '/fotos/prato-carnes.webp', alt: 'Medalhão de carne grelhado com folhas verdes em um prato escuro.' },
    pratos: [
      { nome: 'Bife Ancho com Risoto de Três Queijos', descricao: 'Bife ancho de Angus grelhado na manteiga de ervas com risoto de três queijos (gorgonzola, parmesão e grana padano).' },
      { nome: 'Filé de Angus com Legumes', descricao: 'Filé mignon Angus grelhado na manteiga de ervas com legumes (batata, cenoura, palmito e ervilha fresca).' },
      { nome: 'Filé à Parmegiana com Fettuccine', descricao: 'Filé mignon à milanesa com molho de tomate e mussarela. Acompanha fettuccine na manteiga de ervas.' },
      { nome: 'Medalhão de Filé Angus com Risoto', descricao: 'Medalhão de filé Angus ao molho Cabernet Sauvignon acompanhado de risoto de parmesão.' },
      { nome: 'Paleta de Cordeiro Uruguaio', descricao: 'Paleta de cordeiro ao molho de hortelã com risoto funghi.' },
      { nome: 'Roscove', descricao: 'Arroz branco com filé mignon grelhado ao molho de vinho tinto e ovo frito.' },
      { nome: 'Stinco de Cordeiro', descricao: 'Stinco de cordeiro ao leito de musseline de mandioquinha com redução de molho de hortelã.' },
      { nome: 'Coxa e Sobrecoxa Defumada', descricao: 'Coxa e sobrecoxa assada, regada com azeite uruguaio. Acompanha fettuccine ao molho pomodoro.' },
      { nome: 'Galeto com Risoto', descricao: 'Galeto assado regado com azeite uruguaio, servido com risoto de parmesão ou fettuccine ao pomodoro.' },
      { nome: 'Osso Buco com Fettuccine', descricao: 'Osso buco cozido no vinho branco com especiarias, finalizado com o próprio molho reduzido na manteiga. Acompanha fettuccine na manteiga de ervas.' },
    ],
  },
  {
    id: 'peixes-e-frutos-do-mar', nome: 'Peixes e frutos do mar',
    foto: { src: '/fotos/prato-peixes.webp', alt: 'Filé de salmão grelhado com uma folha verde sobre um prato branco.' },
    pratos: [
      { nome: 'Bacalhau à Lagareiro', descricao: 'Bacalhau confitado no azeite, batatas ao murro, pimentões, tomate-cereja e cebola bolinha salteadas no azeite. Acompanha arroz de bacalhau com amêndoas.' },
      { nome: 'Camarão Rosa com Risoto', descricao: 'Camarão pistola grelhado com sal de Chianti, acompanhado de risoto de alho-poró regado com azeite de ervas.' },
      { nome: 'Filé de Tilápia com Risoto', descricao: 'Filé de tilápia grelhado no azeite com risoto cremoso de limão-siciliano.' },
      { nome: 'Pescada com Risoto', descricao: 'Lombo de pescada amarela grelhado com sal de Chianti, regado com azeite, acompanhado de risoto de limão-siciliano e confit de tomate-cereja.' },
      { nome: 'Polvo Defumado', descricao: 'Polvo grelhado e defumado na casca de laranjeira, acompanhado de risoto de alho-poró ou preparado à lagareiro, conforme opção do cliente.' },
      { nome: 'Salmão ao Molho de Maracujá', descricao: 'Salmão grelhado com sal defumado ao molho de maracujá, acompanhado de arroz à grega com amêndoas tostadas na manteiga.' },
      { nome: 'Risoto de Frutos do Mar', descricao: 'Arroz arbóreo com camarão, polvo, lula e peixe branco congrio.' },
    ],
  },
  {
    id: 'risotos', nome: 'Risotos',
    foto: { src: '/fotos/prato-risoto.webp', alt: 'Arroz cremoso com ervilhas em uma tigela de cerâmica, com limões ao lado.' },
    pratos: [
      { nome: 'Risoto de Três Queijos' },
      { nome: 'Risoto de Limão-Siciliano' },
      { nome: 'Risoto de Parmesão' },
      { nome: 'Risoto Funghi' },
    ],
  },
  {
    id: 'sobremesas', nome: 'Sobremesas',
    foto: { src: '/fotos/prato-sobremesa.webp', alt: 'Sobremesa cremosa branca com calda de frutas vermelhas em um prato branco.' },
    pratos: [
      { nome: 'Brownie com Sorvete de Creme', descricao: 'Bolo tipo brownie de chocolate. Acompanha sorvete de baunilha e calda de chocolate.' },
      { nome: 'Gelato de Doce de Leite', descricao: 'Gelato feito com doce de leite artesanal e flocos de nozes.' },
      { nome: 'Panna Cotta', descricao: 'Emulsão de creme de leite fresco com gelatina incolor e essência de baunilha, acompanhada de calda de frutas vermelhas ao vinho.' },
      { nome: 'Pudim de Leite', descricao: 'Pudim de leite condensado com calda de caramelo.' },
    ],
  },
];

/** Resumo das avaliações públicas do Google, em temas. Não são citações literais nem promessas. */
export const avaliacao: Avaliacao = {
  nota: '4,8',
  total: 299,
  fonte: 'Google',
  temas: [
    { titulo: 'O lugar', itens: ['Ambiente fino e agradável', 'Decoração elogiada'] },
    { titulo: 'À mesa', itens: ['Carne, massa, sobremesa e suco de boa qualidade', 'Apresentação dos pratos', 'Drinks'] },
    { titulo: 'Carta e atendimento', itens: ['Boa carta de vinhos', 'Atendimento elogiado', 'Aniversários e comemorações'] },
  ],
};

export const seo: Seo = {
  indexar: false, // demonstração: não indexar. Em site de verdade, true.
  descricao: 'Santina Restaurante, em Barretos, SP: gastronomia contemporânea com inspiração italiana, em um casarão histórico. Cardápio e reservas pelo WhatsApp. Projeto conceitual.',
  descricaoCardapio: 'Cardápio do Santina Restaurante, em Barretos: entradas, massas, carnes e aves, peixes e frutos do mar, risotos e sobremesas. Projeto conceitual.',
};

const totalPratos = cardapio.reduce((n, c) => n + c.pratos.length, 0);

export const textos: Textos = {
  aviso: 'Projeto conceitual de design. Este não é o site oficial do Santina Restaurante.',
  rodapeNota: 'Projeto conceitual de design e desenvolvimento, sem vínculo oficial com o Santina Restaurante. As informações vêm da documentação enviada para o projeto. Horários, preços, fotos e algumas informações ainda dependem de confirmação com o restaurante.',
  hero: {
    titulo: 'Cozinha de inspiração italiana, num casarão do centro de Barretos.',
    lead: 'Massas, carnes, risotos e frutos do mar, com carta de vinhos, drinks e sobremesas.',
    cardapio: 'Ver o cardápio',
    reservar: 'Reservar pelo WhatsApp',
    quadro: 'Foto ou vídeo de abertura: o casarão ou o salão, de preferência com luz de noite (horizontal, 16:9)',
    legendaVideo: 'Vídeo ilustrativo, não mostra o Santina',
  },
  historia: {
    titulo: 'Uma casa com história, uma mesa sem pressa.',
    texto: [
      'O Santina funciona em um casarão histórico, conforme a apresentação do Grupo Quatro G. A proposta é uma gastronomia contemporânea com inspiração italiana.',
      'Casais, famílias e grupos encontram aqui um ambiente pensado para uma refeição com calma e para comemorar.',
    ],
    etiqueta: 'Imagem ilustrativa, não é o Santina',
    fachada: { rotulo: 'Foto da fachada do casarão (vertical, 4:5)', foto: '/fotos/historia-fachada.webp', alt: 'Fachada de um casarão histórico com janelas em arco, vista de baixo.' },
    interior: { rotulo: 'Foto do interior do salão (horizontal, 3:2)', foto: '/fotos/historia-salao.webp', alt: 'Salão de restaurante à noite, com mesas postas e taças, visto pela vidraça.' },
  },
  experiencia: {
    titulo: `${totalPratos} pratos em ${cardapio.length} categorias.`,
    lead: 'Das entradas às sobremesas, passando por massas, risotos, carnes e aves, peixes e frutos do mar.',
    destaques: [
      { categoriaId: 'massas', foto: '/fotos/prato-massas.webp', alt: 'Prato de fettuccine cremoso em um prato de cerâmica sobre mesa de madeira, visto de cima.', posicao: '50% 45%' },
      { categoriaId: 'carnes-e-aves', foto: '/fotos/prato-carnes.webp', alt: 'Medalhão de carne grelhado com folhas verdes em um prato escuro.' },
      { categoriaId: 'sobremesas', foto: '/fotos/prato-sobremesa.webp', alt: 'Sobremesa cremosa branca com calda de frutas vermelhas em um prato branco.', posicao: '52% 55%' },
    ],
    extras: 'Há também carta de vinhos e drinks.',
    botao: 'Ver o cardápio completo',
  },
  ambiente: {
    titulo: 'Ambiente fino, decoração elogiada.',
    lead: 'Os comentários de quem já esteve falam do ambiente, da decoração e da apresentação dos pratos.',
    etiqueta: 'Imagem ilustrativa, não é o Santina',
    quadros: [
      { rotulo: 'Foto do salão (horizontal, 3:2)', foto: '/fotos/ambiente-salao-mesas-postas.webp', alt: 'Salão de restaurante com mesas postas e luz quente, sem clientes.' },
      { rotulo: 'Foto de um detalhe do casarão (vertical, 4:5)', foto: '/fotos/ambiente-mesa-a-luz-de-velas.webp', alt: 'Mesa comprida posta à noite, com velas acesas, flores laranja, pratos e taças.' },
      { rotulo: 'Foto de mesa posta ou de taças (quadrada, 1:1)', foto: '/fotos/ambiente-tacas-e-mesa-branca.webp', alt: 'Mesa com toalha branca, taças de vinho e guardanapos dobrados.' },
      { rotulo: 'Foto do bar ou dos drinks (horizontal, 3:2)', foto: '/fotos/ambiente-mesas-em-penumbra.webp', alt: 'Mesas postas com taças em um salão à meia-luz.' },
    ],
  },
  avaliacoes: {
    tituloLeitor: 'O que dizem os clientes',
    nota: 'Resumo de comentários públicos no Google, sem citações literais. Há também críticas pontuais, e notas e comentários mudam com o tempo. Veja todos no Google.',
  },
  reservas: {
    titulo: 'Reserve pelo WhatsApp.',
    lead: 'Data, horário e número de pessoas: a mensagem sai pronta para o restaurante.',
    nota: 'O pedido só vale depois que o restaurante confirmar disponibilidade e horário.',
  },
  local: {
    titulo: 'Rua Quatorze, 447',
    descritor: `${negocio.bairro} · ${negocio.cidade} · ${negocio.uf}`,
    horarios: 'Horários',
    horariosNota: 'Horários e dias de funcionamento em confirmação com o restaurante. No Google consta que fecha às 14h30 e reabre às 18h.',
    servicos: 'Serviços',
    mapa: 'Ver no Google Maps',
  },
  cardapio: {
    titulo: 'Cardápio',
    lead: 'Entradas, massas, carnes e aves, peixes e frutos do mar, risotos e sobremesas.',
    nota: 'Cardápio conforme o material fornecido pelo restaurante. Preços e eventuais mudanças serão confirmados com o Santina.',
    quadro: 'Foto de um prato desta categoria (horizontal, 3:2)',
    etiqueta: 'Imagem ilustrativa, não é um prato do Santina',
  },
};
