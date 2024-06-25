import { FormControl } from "@angular/forms";

export function cepValidator(control: FormControl) {
    var re = new RegExp(/[0-9]{2}\.[0-9]{3}\-[0-9]{3}/g);
    let value = control.value;
    let numbers = '';
    if (value){
        value = value.replace(/\s+/g, '');
        value = value.replace(/\D/g, '');
        numbers = value.match(/\d/g);
    }
   
    if (value != undefined && value != null && value != '' && numbers.length != 8)// !re.test(control.value))
        return {
            cep: true
        }
    return null;
}

