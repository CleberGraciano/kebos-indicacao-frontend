import { FormControl } from "@angular/forms";

export function telefoneValidator(control: FormControl) {
    var reNormal = new RegExp(/\([1-9]\d\)9?\d{4}-\d{4}/g);
    var re9Digitos = new RegExp(/\([1-9]\d\)9?\d{5}-\d{4}/g);
  
    let value = control.value;

    if (value)
        value = value.replace(/\s+/g, '');

    if (value != undefined && value != null && value != '') {
        let numbers = value.match(/\d/g);
        let numberLength = 0;
        if (numbers) {
            numberLength = numbers.join("").length;
        }
        if (numberLength == 10)// && reNormal.test(value))
            return null;

        if (numberLength == 11)// && re9Digitos.test(value))
            return null;

        
        return {
            telefone: true
        }
    }
    return null;
}


