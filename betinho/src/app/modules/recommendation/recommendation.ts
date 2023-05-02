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

export interface ItemElement {
  id: number;
  tipo: string;
  nome: string;
  quantidade: number;
  bonus: number;
  created: string;
}
