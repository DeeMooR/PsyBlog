import * as Yup from 'yup';
import { fieldRequiredValidation } from '../validationRules';

export const postRequiredScheme = Yup.object().shape({
  title: fieldRequiredValidation,
  description: fieldRequiredValidation,
  image: fieldRequiredValidation,
  date: fieldRequiredValidation,
});