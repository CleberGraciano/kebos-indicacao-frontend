import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { environment } from '@env/environment';
import { of } from 'rxjs';

const routes = {
  filter: `partnes`,
  insert: `partner`,
  edit: (id: number) => `partner/${id}`,
  getId: (id: number)=> `partner/${id}`,
  estados: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  municipios: (UF: string)=> `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
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
    return this.apiService.get<any>(environment.auth + routes.filter);
  }

  insertPartner(obj: any) {
    return this.apiService.post<any>(environment.auth + routes.insert, obj);
  }

  editPartner(id: number, obj: any) {
    return this.apiService.put<any>(environment.auth + routes.edit(id), obj);
  }

  getIdPartner(id: number) {
    return this.apiService.get<any>(environment.auth + routes.getId(id));
  }

  getEstados() {
    return this.apiService.get<any>(routes.estados);
  }

  getMunicipios(uf: string) {
    return this.apiService.get<any>(routes.municipios(uf));
  }

  getTiposConta() {
    return of([
      { id: 1, name: "Conta Corrente", value: "CORRENTE"},
      { id: 2, name: "Conta Poupanca", value: "POUPANCA"}
    ]);
  }
}
