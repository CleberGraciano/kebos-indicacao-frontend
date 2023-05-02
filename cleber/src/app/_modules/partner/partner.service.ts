import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { DadosPaginados } from '@core/common/common';
import { ApiService } from 'src/app/_services/api.service';

const routes = {
  filtrar: `/GrupoCategoriaCliente/Filtrar`,
  inserir: ``,
  editar: ``,
  inativar: ``,
  buscaPorId: (id:number) => `/BuscaPorId/${id}`,
  validarCliente:(codigoCliente:number)=> `/ValidarCliente?codigoCliente=${codigoCliente}`,
  buscarAtivos: ``
}

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(
    private apiService: ApiService
  ) { }

  // filtrar(obj: ColaboradorFiltro, pagina:number, itensPagina:number) {
  //   let params = new HttpParams();
  //   params = params.append('pagina', pagina);
  //   params = params.append('itensPagina', itensPagina);
  //   return this.apiService.post<DadosPaginados<ColaboradorElement>>(`${routes.filtrar}`, obj,false,undefined,params);
  // }
}
