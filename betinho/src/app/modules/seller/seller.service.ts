import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosPaginados } from '@core/common/common';
import { ApiService } from '@core/services/api.service';
import { SellerElement, SellerFilter } from './seller';

const routes = {
  filter: `sellers`,
  insert: `sellers`,
  edit: (id: number) => `sellers/${id}`,
  getId: (id: number)=> `sellers/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(
    private apiService:ApiService
  ) { }

  // filter(obj: SellerElement, pagina: number, itensPagina:number) {
  //   let params = new HttpParams();
  //   params = params.append('pagina', pagina);
  //   params = params.append('itensPagina', itensPagina);
  //   return this.apiService.get<SellerFilter[]>(`${routes.filter}`, undefined, params);
  // }

  filter() {
    return this.apiService.get<SellerFilter>(routes.filter);
  }

  insertSeller(obj: SellerElement) {
    return this.apiService.post<SellerElement>(routes.insert, obj);
  }

  editSeller(id: number, obj: SellerElement) {
    return this.apiService.put<SellerElement>(routes.edit(id), obj);
  }

  getIdSeller(id: number) {
    return this.apiService.get<SellerElement>(routes.getId(id));
  }
}
