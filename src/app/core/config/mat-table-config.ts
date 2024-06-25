import { MatPaginatorIntl } from '@angular/material/paginator';

const label = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 à ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;


    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
}


export function customPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    paginatorIntl.nextPageLabel = 'Próxima Página';
    paginatorIntl.previousPageLabel = 'Página Anterior';
    paginatorIntl.getRangeLabel = label;
    paginatorIntl.lastPageLabel = 'Última página';
    paginatorIntl.firstPageLabel = 'Primeira Página';

    return paginatorIntl;
}