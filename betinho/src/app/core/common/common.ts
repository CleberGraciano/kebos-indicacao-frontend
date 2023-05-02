export interface ItemCombo{
    id:any;
    nome:string;
}

export interface Paginacao{
    pagina:number;
    itensPagina:number;
}

export class DadosPaginados<T>{
    total!:number;
    content!:T[];
}