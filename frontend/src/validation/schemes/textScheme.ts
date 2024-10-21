import * as Yup from 'yup';
import { fieldRequiredValidation } from '../validationRules';

export const textScheme = Yup.object().shape({
  text: fieldRequiredValidation,
});