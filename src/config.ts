import { IFAQ, IService, IShortCard } from "src/interfaces";
import { certificate_1, certificate_2, certificate_3, certificate_4, certificate_5, certificate_6, post_1, post_2, post_3, service_1, service_2 } from 'src/assets';

export const services: IService[] = [
  {
    id: 1,
    image: service_1,
    name: 'Индивидуальная консультация',
    description: 'Для взрослых (21+)',
    price: '7000 ₽',
    time: '50 мин.'
  },
  {
    id: 2,
    image: service_2,
    name: 'Бизнес консультация',
    description: 'Для взрослых (21+)'
  }
];

export const faqs: IFAQ[] = [
  {
    id: 1,
    title: 'Психолог, психотерапевт, психоаналитик?',
    text: 'Особенность психоанализа — работа с глубинными переживаниями. Психоаналитик помогает клиенту обнаружить и разрешить те конфликты, на почве которых в течение жизни постоянно формируются новые проблемы. Это как если из прохудившейся резиновой лодки не вычерпывать все время воду (что делает обычная психотерапия), а найти и заделать пробоину в днище.'
  },
  {
    id: 2,
    title: 'Психолог, психотерапевт, психоаналитик?',
    text: 'Особенность психоанализа — работа с глубинными переживаниями. Психоаналитик помогает клиенту обнаружить и разрешить те конфликты, на почве которых в течение жизни постоянно формируются новые проблемы. Это как если из прохудившейся резиновой лодки не вычерпывать все время воду (что делает обычная психотерапия), а найти и заделать пробоину в днище.'  },
  {
    id: 3,
    title: 'Психолог, психотерапевт, психоаналитик?',
    text: 'Особенность психоанализа — работа с глубинными переживаниями. А найти и заделать пробоину в днище.'  },
  {
    id: 4,
    title: 'Психолог, психотерапевт, психоаналитик?',
    text: 'Особенность психоанализа — работа с глубинными переживаниями. Психоаналитик помогает клиенту обнаружить и разрешить те конфликты, на почве которых в течение жизни постоянно формируются новые проблемы. Это как если из прохудившейся резиновой лодки не вычерпывать все время воду (что делает обычная психотерапия), а найти и заделать пробоину в днище.'  },
];

export const certificates = [
  { src: certificate_1, width: 400, height: 300 },
  { src: certificate_2, width: 400, height: 300 },
  { src: certificate_3, width: 400, height: 300 },
  { src: certificate_4, width: 400, height: 300 },
  { src: certificate_5, width: 400, height: 300 },
  { src: certificate_6, width: 300, height: 400 },
];

export const certificates_slides: {src: string}[] = [
  { src: certificate_1 },
  { src: certificate_2 },
  { src: certificate_3 },
  { src: certificate_4 },
  { src: certificate_5 },
  { src: certificate_6 },
]

export const topCards: IShortCard[] = [
  {
    id: 1,
    title: 'Психология!',
    description: 'Психология - наука.',
    image: post_1,
    date: '01.01.2024'
  },
  {
    id: 2,
    title: 'Что такое психология?',
    description: 'Психология - это наука, изучающая процессы и закономерности психической деятельности.',
    image: post_2,
    date: '02.01.2024'
  },
  {
    id: 3,
    title: 'Что такое психология?',
    description: 'Психология - это наука, изучающая процессы и закономерности психической деятельности. Добавил рандомного текста чтобы проверить точки но пока что они не появляются. Тестируем дальше эту фичу',
    image: post_3,
    date: '03.01.2024'
  }
];

export const allCards: IShortCard[] = [
  {
    id: 1,
    title: 'Психология!',
    description: 'Психология - наука.',
    image: post_1,
    date: '01.01.2024'
  },
  {
    id: 2,
    title: 'Что такое психология?',
    description: 'Психология - это наука, изучающая процессы и закономерности психической деятельности.',
    image: post_2,
    date: '02.01.2024'
  },
  {
    id: 3,
    title: 'Что такое психология?',
    description: 'Психология - это наука, изучающая процессы и закономерности психической деятельности. Добавил рандомного текста чтобы проверить точки но пока что они не появляются. Тестируем дальше эту фичу',
    image: post_3,
    date: '03.01.2024'
  },
  {
    id: 4,
    title: 'Психология!',
    description: 'Психология - наука.',
    image: post_1,
    date: '01.01.2024'
  },
  {
    id: 5,
    title: 'Что такое психология?',
    description: 'Психология - это наука, изучающая процессы и закономерности психической деятельности.',
    image: post_2,
    date: '02.01.2024'
  },
  {
    id: 6,
    title: 'Что такое психология?',
    description: 'Психология - это наука, изучающая процессы и закономерности психической деятельности. Добавил рандомного текста чтобы проверить точки но пока что они не появляются. Тестируем дальше эту фичу',
    image: post_3,
    date: '03.01.2024'
  }
];

export const radioOptions: string[][] = [
  ['Заголовок', 'Текст', 'Заголовок и текст'],
  ['Изображение S', 'Изображение M', 'Изображение L', 'Два изображения'],
  ['Цитата', 'Перечисление (пункты)', 'Перечисление (цифры)'],
]

export type NewBlockNames = 'Заголовок';