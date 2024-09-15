import * as Yup from 'yup';
import { fieldRequiredValidation, imageRequiredValidation } from '../validationRules';

export const postRequiredScheme = Yup.object().shape({
  title: fieldRequiredValidation,
  date: fieldRequiredValidation,
  image: imageRequiredValidation,
});