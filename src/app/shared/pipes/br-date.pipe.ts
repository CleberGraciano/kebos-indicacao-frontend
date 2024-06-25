import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({ name: 'brDate' })
export class BrDate implements PipeTransform {
    transform(value: Date): string {
        if (value) {
          let dataFormatada = dayjs(value, 'DD/MM/YYYY', false).format('DD/MM/YYYY');
          if(dataFormatada == 'Invalid Date') {
            const data = new Date(value);
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            dataFormatada = `${dia}/${mes}/${ano}`;
          }

          return dataFormatada
        }

        return value;
    }
}
