import { FormControl } from "@angular/forms";

export function cpfCnpjValidator(control: FormControl) {
    var reCPF = new RegExp(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g);
    var reCNPJ = new RegExp(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g);
    if (control.value != undefined && control.value != null && control.value != '') {

        let numbers = control.value.match(/\d/g);
        let numberLength = 0;
        if (numbers) {
            numberLength = numbers.join("").length;
        }
        if (numberLength > 11 && !reCNPJ.test(control.value))
            return {
                cnpj: true
            }
        else
            if (numberLength <= 11 && !reCPF.test(control.value))
                return {
                    cpf: true
                }
    }
    return null;
}

