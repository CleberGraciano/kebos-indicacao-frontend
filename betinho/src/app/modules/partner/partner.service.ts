import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosPaginados } from '@core/common/common';
import { ApiService } from '@core/services/api.service';

const routes = {
  filter: `partners`,
  insert: `partners`,
  edit: (id: number) => `partners/${id}`,
  getId: (id: number)=> `partners/${id}`
}

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

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

  insertPartner(obj: any) {
    return this.apiService.post<any>(routes.insert, obj);
  }

  editPartner(id: number, obj: any) {
    return this.apiService.put<any>(routes.edit(id), obj);
  }

  getIdPartner(id: number) {
    return this.apiService.get<any>(routes.getId(id));
  }
}
