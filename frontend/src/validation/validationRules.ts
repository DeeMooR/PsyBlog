import * as Yup from 'yup';

import {
  NAME_PATTERN,
  EMAIL_PATTERN,
  LIST_PATTERN,
} from './regExp';

// поле (необязательное)
export const fieldValidation = Yup.string().nullable();

// поле (обязательное)
export const fieldRequiredValidation = Yup.string().required('Обязательное поле');


// имя (обязательное)
export const nameRequiredValidation = Yup.string()
  .required('Обязательное поле')
  .matches(NAME_PATTERN, 'Некорректное имя');

// почта (обязательное)
export const emailRequiredValidation = Yup.string()
  .required('Обязательное поле')
  .matches(EMAIL_PATTERN, 'Некорректная почта');

// список (обязательное)
export const listRequiredValidation = Yup.string()
  .required('Обязательное поле')
  .matches(LIST_PATTERN, 'Некорректная запись');

// дата (обязательное)
export const dateRequiredValidation = Yup.date()
  .required('Обязательное поле')
  .nullable()
  .typeError('Некорректная дата');