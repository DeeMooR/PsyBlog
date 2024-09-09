import * as Yup from 'yup';
import { emailRequiredValidation, nameRequiredValidation, phoneRequiredValidation } from '../validationRules';

export const orderScheme = Yup.object().shape({
  name: nameRequiredValidation,
  email: emailRequiredValidation,
  phone: phoneRequiredValidation,
});