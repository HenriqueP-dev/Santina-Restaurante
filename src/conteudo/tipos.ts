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
export interface Categoria { id: string; nome: string; pratos: Prato[] }
export interface Servico { id: 'local' | 'viagem' | 'entrega'; nome: string }
export interface Avaliacao { nota: string; total: number; fonte: string; temas: { titulo: string; itens: string[] }[] }

export interface Seo { indexar: boolean; descricao: string; descricaoCardapio: string }

export interface Textos {
  aviso: string;                // faixa do topo; '' = sem faixa
  rodapeNota: string;
  hero: { titulo: string; lead: string; cardapio: string; reservar: string; quadro: string };
  historia: { rotulo: string; titulo: string; texto: string[]; pendente: string; quadroFachada: string; quadroInterior: string };
  experiencia: { rotulo: string; titulo: string; lead: string; destaques: { quadro: string; categoria: string; prato: string }[]; extras: string; botao: string };
  ambiente: { rotulo: string; titulo: string; lead: string; quadros: string[] };
  avaliacoes: { tituloLeitor: string; nota: string };
  reservas: { rotulo: string; titulo: string; lead: string; nota: string };
  local: { rotulo: string; titulo: string; horarios: string; horariosNota: string; servicos: string; mapa: string };
  cardapio: { titulo: string; lead: string; nota: string; quadro: string; semDescricao: string };
}
