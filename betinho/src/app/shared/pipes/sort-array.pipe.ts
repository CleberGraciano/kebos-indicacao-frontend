import { Pipe } from '@angular/core';

@Pipe({
    name: "sort",
    pure: false
})
export class ArraySortPipe {
    transform(array: Array<string>, args: string): Array<string> {
        if (array !== undefined) {
            return array.sort((a: any, b: any) => {

                const aValue = a.controls[args].value;
                const bValue = b.controls[args].value;
               return aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' })
            });
        }
        return array;
    }
}