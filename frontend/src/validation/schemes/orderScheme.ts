import * as Yup from 'yup';
import { emailRequiredValidation, nameRequiredValidation, fieldRequiredValidation } from '../validationRules';

export const orderScheme = Yup.object().shape({
  name: nameRequiredValidation,
  email: emailRequiredValidation,
  phone: fieldRequiredValidation,
});