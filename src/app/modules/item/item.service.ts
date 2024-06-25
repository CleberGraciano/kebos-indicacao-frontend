import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosPaginados } from '@core/common/common';
import { ApiService } from '@core/services/api.service';
import { environment } from '@env/environment';
import { of } from 'rxjs';

const routes = {
  filterSearch: `items/search`,
  filter: `items`,
  insert: `items`,
  edit: (id: number) => `items/${id}`,
  getId: (id: number)=> `items/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private apiService:ApiService
  ) { }


  filterSearch(search: string) {
    let params = new HttpParams();
    params = params.append('name', search);
    return this.apiService.get<any>(routes.filterSearch, undefined, params );
  }

  filter() {
    return this.apiService.get<any>(routes.filter);
  }

  getItems(value: string) {
    return this.apiService.get<any>(routes.filter);
  }

  insertItem(obj: any) {
    return this.apiService.post<any>(routes.insert, obj);
  }

  editItem(id: number, obj: any) {
    return this.apiService.put<any>(routes.edit(id), obj);
  }

  getIdItem(id: number) {
    return this.apiService.get<any>(routes.getId(id));
  }

  // getTipos() {
  //   return of([
  //     { id: 1, name: "Produto", value: "Produto"},
  //     { id: 2, name: "Serviço", value: "Servico"}
  //   ]);
  // }
}
