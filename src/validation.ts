import * as Yup from 'yup';

const isRequired = Yup.string().required('Обязательное для заполнения поле');

export const orderForm = Yup.object().shape({
  name: isRequired,
  email: isRequired,
  question: isRequired,
});

export const newPostRequired = Yup.object().shape({
  title: isRequired,
  description: isRequired,
  image: isRequired,
  date: isRequired,
});