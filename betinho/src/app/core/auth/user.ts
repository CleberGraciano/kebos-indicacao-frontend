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


export enum PermissoesEnum {
  Adm = 'ROLE_ADMIN',
  User = 'ROLE_USER',
  Moderador = 'ROLE_MODERATOR'
}