import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().required('Обязательное для заполнения поле'),
  email: Yup.string().required('Обязательное для заполнения поле'),
  question: Yup.string().required('Обязательное для заполнения поле'),
});