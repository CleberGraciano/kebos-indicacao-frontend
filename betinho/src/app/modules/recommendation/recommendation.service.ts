import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosPaginados } from '@core/common/common';
import { ApiService } from '@core/services/api.service';
import { of } from 'rxjs';
import { RecommendationElement, RecommendationFilter } from './recommendation';

const routes = {
  filter: `recommendations`,
  insert: `recommendations`,
  edit: (id: number) => `recommendations/${id}`,
  getId: (id: number) => `recommendations/${id}`,
  getListRecommendation: (status: string)=> `recommendations/status/${status}`,
}

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(
    private apiService:ApiService
  ) { }

  // filter(obj: RecommendationElement, pagina: number, itensPagina:number) {
  //   let params = new HttpParams();
  //   params = params.append('pagina', pagina);
  //   params = params.append('itensPagina', itensPagina);
  //   return this.apiService.get<RecommendationFilter[]>(`${routes.filter}`, undefined, params);
  // }

  filter() {
    return this.apiService.get<any>(routes.filter);
  }

  insertRecommendation(obj: RecommendationElement) {
    return this.apiService.post<RecommendationElement>(routes.insert, obj);
  }

  editRecommendation(id: number, obj: RecommendationElement) {
    return this.apiService.put<RecommendationElement>(routes.edit(id), obj);
  }

  getIdRecommendation(id: number) {
    return this.apiService.get<RecommendationElement>(routes.getId(id));
  }

  getListRecommendation(status: string) {
    return this.apiService.get<any>(routes.getListRecommendation(status));
  }

  getStatusRecommendation() {
    return of([
      { id: 0, name: "CANCELADO", value: "CANCELADO"},
      { id: 1, name: "ENCERRADO", value: "ENCERRADO"},
      { id: 2, name: "ENVIADO", value: "ENVIADO"},
      { id: 3, name: "NEGOCIANDO", value: "NEGOCIANDO"},
      { id: 4, name: "VENDIDO", value: "VENDIDO"}
    ]);
  }
}
