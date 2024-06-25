import { FormControl } from "@angular/forms";

export function rgValidator(control: FormControl) {
    var re = new RegExp(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/g);


    if (control.value != undefined && control.value != null && control.value != '' && !re.test(control.value.replace(/\D/g,"")))
        return {
            rg: true
        }
    return null;
}

