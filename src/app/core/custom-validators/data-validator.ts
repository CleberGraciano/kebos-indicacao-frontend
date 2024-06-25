import { FormControl } from "@angular/forms";
import * as moment from 'moment';
export function dataValidator(control: FormControl) {

    if (control.value && !moment(control.value, 'DD/MM/YYYY', true).isValid())
        return {
            data: true
        }
    return null;
}

