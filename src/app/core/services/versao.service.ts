import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const routes = {
  getList: `auth/version`
}

@Injectable({
  providedIn: 'root'
})
export class VersaoService {

  constructor(private apiService: ApiService) { }

  getList() {
    return this.apiService.get<any[]>(routes.getList);
  }
}