import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { CustomCurrencyMaskConfig } from './currency-mask-config';
export const currencyMaskProviders = [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
]