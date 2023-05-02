export interface UserAuth {
  sub?: string;
  iat?: number;
  exp?: number;
  id?: string;
  displayName?: string;
  email?: string;
  statusCadastro?: boolean;
  roles?: string[];
}
