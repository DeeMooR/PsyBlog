import * as Yup from 'yup';
import { fieldRequiredValidation, dateRequiredValidation } from '../validationRules';

export const postRequiredScheme = Yup.object().shape({
  title: fieldRequiredValidation,
  date: dateRequiredValidation,
});