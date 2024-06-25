import { FormControl } from "@angular/forms";

export function nullValidator(control: FormControl) {
    let value = control.value;
    if (value == null || value === null || value == 'null')
        return {
            nullValue: true
        }

    return null;
}


