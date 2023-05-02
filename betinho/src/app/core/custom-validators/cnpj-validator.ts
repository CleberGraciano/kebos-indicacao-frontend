import { FormControl } from "@angular/forms";

export function cnpjValidator(control: FormControl) {
    var re = new RegExp(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g);

    if (control.value != undefined && control.value != null && control.value != '' && !re.test(control.value))
        return {
            cnpj: true
        }
    return null;
}

