import * as Yup from 'yup';
import { fieldRequiredValidation } from '../validationRules';

export const authScheme = Yup.object().shape({
  login: fieldRequiredValidation,
  password: fieldRequiredValidation,
});