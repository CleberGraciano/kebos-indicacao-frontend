import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosPaginados } from '@core/common/common';
import { ApiService } from '@core/services/api.service';
import { of } from 'rxjs';

const routes = {
  filter: `category`,
  insert: `category`,
  edit: (id: number) => `category/${id}`,
  getId: (id: number)=> `category/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private apiService:ApiService
  ) { }

  // filtrar(obj: ColaboradorFiltro, pagina:number, itensPagina:number) {
  //   let params = new HttpParams();
  //   params = params.append('pagina',pagina);
  //   params = params.append('itensPagina',itensPagina);
  //   return this.apiService.post<DadosPaginados<ColaboradorElement>>(`${routes.filtrar}`, obj,false,undefined,params);
  // }

  filter() {
    return this.apiService.get<any>(routes.filter);
  }

  getCategories(value: string) {
    return this.apiService.get<any>(routes.filter);
  }

  insertCategory(obj: any) {
    return this.apiService.post<any>(routes.insert, obj);
  }

  editCategory(id: number, obj: any) {
    return this.apiService.put<any>(routes.edit(id), obj);
  }

  getIdCategory(id: number) {
    return this.apiService.get<any>(routes.getId(id));
  }
}
