/** Formato do conteúdo de um restaurante. O editor avisa quando falta ou sobra algum campo. */
export interface Negocio {
  nome: string;
  descritor: string;            // 'Restaurante'
  cidade: string;
  uf: string;
  endereco: string;             // rua e número
  bairro: string;
  cep: string;
  enderecoCompleto: string;
  telefone: string;             // como aparece na tela
  telefoneLink: string;         // 'tel:+55...'
  telefoneIntl: string;
  whatsapp: string;             // só dígitos com DDI
  instagram: string;            // '@santinarestaurante'
  instagramUrl: string;         // '' se o link ainda não foi confirmado
  mapaLink: string;
  logo: string;                 // arquivo em /public
  logoAlt: string;
}

export interface Prato { nome: string; descricao?: string }
export interface Foto { src: string; alt: string; posicao?: string }
export interface Categoria { id: string; nome: string; foto?: Foto; pratos: Prato[] }
export interface Servico { id: 'local' | 'viagem' | 'entrega'; nome: string }
export interface Avaliacao { nota: string; total: number; fonte: string; temas: { titulo: string; itens: string[] }[] }

export interface Seo { indexar: boolean; descricao: string; descricaoCardapio: string }

export interface Textos {
  aviso: string;                // faixa do topo; '' = sem faixa
  rodapeNota: string;
  hero: { titulo: string; lead: string; cardapio: string; reservar: string; quadro: string; legendaVideo: string };
  historia: { titulo: string; texto: string[]; etiqueta: string; fachada: { rotulo: string; foto?: string; alt?: string }; interior: { rotulo: string; foto?: string; alt?: string } };
  experiencia: { titulo: string; lead: string; destaques: { categoriaId: string; foto?: string; alt?: string; posicao?: string }[]; extras: string; botao: string };
  ambiente: { titulo: string; lead: string; etiqueta: string; quadros: { rotulo: string; foto?: string; alt?: string }[] };
  avaliacoes: { tituloLeitor: string; nota: string };
  reservas: { titulo: string; lead: string; nota: string };
  local: { titulo: string; descritor: string; horarios: string; horariosNota: string; servicos: string; mapa: string };
  cardapio: { titulo: string; lead: string; nota: string; quadro: string; etiqueta: string };
}
