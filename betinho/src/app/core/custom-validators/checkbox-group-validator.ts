import { FormControl } from "@angular/forms";

export function checkBoxGroupRequiredValidator(control: FormControl) {

    let value = control.value;

    if (value == null || value === null || value == 'null')
        return {
            arrayRequired: true
        }

    if (value != null && Array.isArray(value) && value.filter(x => x.checked).length == 0)
        return {
            arrayRequired: true
        }

    return null;
}

