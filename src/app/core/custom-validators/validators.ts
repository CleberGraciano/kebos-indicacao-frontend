import { cpfValidator } from './cpf-validator';
import { telefoneValidator } from './telefone-validator';
import { cnpjValidator } from './cnpj-validator';
import { nullValidator } from './null-validator';
import { requiredFileType } from './file-type-validator';
import { imageSizeValidator } from './image-size-validator';
import { whiteSpace } from './white-space-validator';
import { cpfCnpjValidator } from './cpf-cnpj-validator';
import { cepValidator } from './cep-validator';
import { dataValidator } from './data-validator';
import { checkBoxGroupRequiredValidator } from './checkbox-group-validator';
import { rgValidator } from './rgValidator';

export const CustomValidators = {
    cpf: cpfValidator,
    telefone: telefoneValidator,
    cnpj: cnpjValidator,
    nullValue: nullValidator,
    fileType: requiredFileType,
    imageSize: imageSizeValidator,
    whiteSpace:whiteSpace,
    cpfCnpj:cpfCnpjValidator,
    cep:cepValidator,
    data:dataValidator,
    checkBoxGroupRequiredValidator:checkBoxGroupRequiredValidator,
    rg:rgValidator
}