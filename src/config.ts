import { IFAQ, IService, IShortPost } from "src/interfaces";
import { certificate_1, certificate_2, certificate_3, certificate_4, certificate_5, certificate_6, certificate_7, certificate_8, post_1, post_2, post_3, post_4, post_5, post_6, post_7, service_1, service_2 } from 'src/assets';

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
    name: 'Психоаналитический коучинг',
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
  { src: certificate_7, width: 400, height: 300 },
  { src: certificate_6, width: 300, height: 400 },
  { src: certificate_8, width: 294, height: 100 },
];

export const certificates_slides: {src: string}[] = [
  { src: certificate_1 },
  { src: certificate_2 },
  { src: certificate_3 },
  { src: certificate_4 },
  { src: certificate_5 },
  { src: certificate_7 },
  { src: certificate_6 },
  { src: certificate_8 },
]

export const topCards: IShortPost[] = [
  {
    id: 1,
    title: 'Психология!',
    image: post_1,
  },
  {
    id: 2,
    title: 'Что такое психология?',
    image: post_2,
  },
  {
    id: 3,
    title: 'Что такое психология?',
    image: post_3,
  },
];

export const allCards: IShortPost[] = [
  {
    id: 1,
    title: 'Психология!',
    image: post_1,
  },
  {
    id: 2,
    title: 'Что такое психология?',
    image: post_2,
  },
  {
    id: 3,
    title: 'Что такое психология?',
    image: post_3,
  },
  {
    id: 4,
    title: 'Психология!',
    image: post_4,
  },
  {
    id: 5,
    title: 'Что такое психология?',
    image: post_5,
  },
  {
    id: 6,
    title: 'Что такое психология?',
    image: post_6,
  },
  {
    id: 7,
    title: 'Что такое психология?',
    image: post_7,
  },
];

export const quotes = [
  'Психология — это выражение словами <br/>того, чего нельзя ими выразить.',
  'Не всякий умный человек знает психологию. <br/>Но всякий, кто знает психологию, умён.',
  'Не всякий умный человек знает психологию. <br/>Но всякий, кто знает психологию, умён.'
]

export const list_placeholder = '[-] первый пункт \n[-] второй пункт \n[-] третий пункт'