import * as Yup from 'yup';
import { fieldRequiredValidation } from '../validationRules';

export const titleScheme = Yup.object().shape({
  title: fieldRequiredValidation,
});