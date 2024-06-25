import { MASKS } from 'ng-brazil';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const Masks = {
    telefone: (value: any) => {
        let numbers = value.match(/\d/g);
        let numberLength = 0;
        if (numbers) {
            numberLength = numbers.join("").length;
        }

        if (numberLength > 10) {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        } else {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
    },
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    contrato: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    decimal: createNumberMask({
        decimalSymbol: ',',
        prefix: '',
        includeThousandsSeparator: false,
        allowDecimal: true,
        decimalLimit: 9
    }),
    currency: MASKS['currency'].textMask,
    integer: createNumberMask({
        decimalSymbol: ',',
        prefix: '',
        includeThousandsSeparator: false
    }),
    periodoAno: [/\d/, /\d/, /\d/, /\d/],
    data: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    cpfCnpj: (value: any) => {
        let numbers = value.match(/\d/g);
        let numberLength = 0;
        if (numbers) {
            numberLength = numbers.join("").length;
        }

        if (numberLength > 11) {
            return Masks.cnpj
        } else {
            return Masks.cpf
        }
    },
    cep: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    ID: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    rg: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
}
