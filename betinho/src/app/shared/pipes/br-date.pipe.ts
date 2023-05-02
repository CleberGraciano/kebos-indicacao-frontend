import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({ name: 'brDate' })
export class BrDate implements PipeTransform {
    transform(value: Date): string {
        if (value)
          return dayjs(value).format('DD/MM/YYYY')

        return '';
    }
}
