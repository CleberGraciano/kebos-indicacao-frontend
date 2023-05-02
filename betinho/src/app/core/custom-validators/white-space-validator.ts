import { AbstractControl } from '@angular/forms';
export function whiteSpace(control: AbstractControl) {

    if (control.value) {
        const valueNoWhiteSpace = control.value.trim();
        const isValid = valueNoWhiteSpace === control.value;
        return isValid ? null : { whitespace: true };
    }

    return null;
}