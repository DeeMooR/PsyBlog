import * as Yup from 'yup';
import { fieldValidation, listRequiredValidation } from '../validationRules';

export const listScheme = Yup.object().shape({
  text: fieldValidation,
  items: listRequiredValidation,
});