export interface RecommendationFilter {
  id: number;
  nomePessoaEmpresa: string;
  cpfCnpj: string;
  emailprivate: string;
  nomeContato: string;
  telefone: string;
  items: ItemElement[];
  valortotal: number;
  observacao: string;
  status: string;
  user: User;
}

export interface RecommendationElement {
  seller: Record<string, string>;
  id: number;
  nomePessoaEmpresa: string;
  cpfCnpj: string;
  email: string;
  nomeContato: string;
  telefone: string;
  itemRecommendations: RecommendedItems[];
  valortotal: number;
  observacao: string;
  status: string;
  user: User;
}

export interface User {
  id: number;
  providerUserId: string;
  email: string;
  enabled: boolean;
  displayName: string;
  createdDate: string;
  modifiedDate: string;
  password: string;
  provider: string;
}

export interface RecommendedItems {
  id?: number;
  categoria: string;
  quantidade: number;
  totalBonus: number;
  item: ItemElement;
}

export interface ItemElement {
  category?: Category;
  id?: number;
  tipo: string;
  nome: string;
  quantidade: number;
  bonus: number;
  created: string;
}

interface Category {
  id: number;
  nome: string;
  descricao?: string;
}
