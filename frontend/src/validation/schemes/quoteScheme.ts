import * as Yup from 'yup';
import { fieldRequiredValidation } from '../validationRules';

export const quoteScheme = Yup.object().shape({
  quote: fieldRequiredValidation,
});