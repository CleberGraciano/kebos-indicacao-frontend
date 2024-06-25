import { SortDirection } from '@angular/material/sort';

interface Pageable {
    linha?: number;
    pagina?: number;
    registros?: number;
    total?: number;
}

export class CustomMatSortable {
    name: string;
    order: SortDirection;
}

export enum OrderEnum {
    asc = 'asc',
    desc = 'desc'
}

export class MatPageable implements Pageable {
    linha?: number;
    pagina?: number;
    registros?: number;
    total?: number;
    sort?: CustomMatSortable;

    constructor(page?: number, size?: number, sort?:CustomMatSortable) {
        this.pagina = page != undefined ? page : 0;
        this.registros = size != undefined ? size : 9999999;
        this.sort = sort;
    }


    public get query() {
        return `?pageNumber=${this.pagina}&pageSize=${this.registros}`;
    }

    public get order() {
        return this.sort && this.sort.name && this.sort.order?`&sort=${ this.sort.name}.${ this.sort.order}` : '';
    }
}

export class PageableResponse<T> {
    content: Array<T>;
    totalElements: number;
    pageable: { sort: any, pageSize: number, pageNumber: number, offset: number, unpaged: boolean }
    totalPages: number;
    last: boolean;
    first: boolean;
    sort: { sorted: boolean, unsorted: boolean, empty: boolean }
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
}