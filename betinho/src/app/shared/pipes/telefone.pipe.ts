import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: string): string {
    const numericValue = value?.replace(/\D/g, '');

    if (numericValue?.length === 10 || numericValue?.length === 11) {
      if (numericValue?.length === 10) {
        return `(${numericValue.substr(0, 3)}) ${numericValue.substr(3, 3)}-${numericValue.substr(6, 4)}`;
      } else {
        return `(${numericValue.substr(0, 2)}) ${numericValue.substr(2, 5)}-${numericValue.substr(7, 4)}`;
      }
    }
    return value;
  }
}
