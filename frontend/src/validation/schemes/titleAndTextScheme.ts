import * as Yup from 'yup';
import { fieldRequiredValidation } from '../validationRules';

export const titleAndTextScheme = Yup.object().shape({
  title: fieldRequiredValidation,
  text: fieldRequiredValidation,
});