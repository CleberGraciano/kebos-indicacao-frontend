import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  normalize(text: string) {
    if (text)
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return text;
  }

  trim(text: string) {
    if (text)
      return text.replace(new RegExp(' ', 'g'), '');

    return text;
  }
}
