export interface SellerFilter {
  length: number;
  id: number,
  nome: string,
  email: string,
  telefone: string,
  created: Date
}

export interface SellerElement {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  created: string;
}
