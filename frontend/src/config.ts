import { IFAQ, IQualificationChapter, IService } from "src/interfaces";
import { certificate_1, certificate_2, certificate_3, certificate_4, certificate_5, certificate_6, certificate_7, certificate_8, service_1, service_2 } from 'src/assets';
import { BlockNames } from "./postBlocks/interfaces";

export const services: IService[] = [
  {
    id: 1,
    image: service_1,
    name: 'Индивидуальная консультация',
    description: 'Для взрослых (18+)',
    price: '40 €',
    time: '45 мин.'
  },
  {
    id: 2,
    image: service_2,
    name: 'Психоаналитический коучинг',
    description: 'Стоимость',
    price: 'по договорённости'
  }
];

export const faqs_left: IFAQ[] = [
  {
    title: 'Диагностика',
    text: 'Первые три сессии диагностические в формате психоаналитической консультации для выявления сути проблемы и определения формата работы'
  },
  {
    title: 'Сессия',
    text: 'Длительность каждой сессии 45 минут. Частота встреч определяется после первичной диагностики'  
  },
];

export const faqs_right: IFAQ[] = [
  {
    title: 'Психолог, психотерапевт, психоаналитик?',
    text: 'Особенность психоанализа — работа с глубинными переживаниями. А найти и заделать пробоину в днище.'  },
  {
    title: 'Психолог, психотерапевт, психоаналитик?',
    text: 'Особенность психоанализа — работа с глубинными переживаниями. Психоаналитик помогает клиенту обнаружить и разрешить те конфликты, на почве которых в течение жизни постоянно формируются новые проблемы. Это как если из прохудившейся резиновой лодки не вычерпывать все время воду (что делает обычная психотерапия), а найти и заделать пробоину в днище.'  
  },
];

export const certificates = [
  { src: certificate_1, width: 400, height: 300 },
  { src: certificate_2, width: 400, height: 300 },
  { src: certificate_6, width: 300, height: 400 },
  { src: certificate_3, width: 400, height: 300 },
  { src: certificate_7, width: 300, height: 400 },
  { src: certificate_4, width: 400, height: 300 },
  { src: certificate_5, width: 400, height: 300 },
  { src: certificate_8, width: 294, height: 100 },
];

export const certificates_slides: {src: string}[] = [
  { src: certificate_1 },
  { src: certificate_2 },
  { src: certificate_6 },
  { src: certificate_3 },
  { src: certificate_7 },
  { src: certificate_4 },
  { src: certificate_5 },
  { src: certificate_8 },
]

export const qualification: IQualificationChapter[] = [
  {
    title: 'Основное образование',
    items: [
      'Психолог, преподаватель психологии',
      'В настоящее время прохожу обучение по программам клинической психологии и психоанализа, психоаналитической психотерапии и консультирования',
      'Веду частную практику с 2024 года',
      'Имею учёную степень кандидата экономических наук'
    ]
  },
  {
    title: 'Повышение квалификации',
    items: [
      'Психоаналитическое консультирование',
      'Основы кризисного консультирования. Профилактика ПТСР',
      'Травма отношений и ее последствия: практика нейропсихоаналитической работы',
      'Эмиграция и релокация. Особенности психотерапии с клиентами в релокации',
      'Участие в различных конференциях'
    ]
  },
  {
    title: 'Статус и членство в организациях',
    items: [
      'Являюсь членом Европейской ассоциации развития психоанализа и психотерапии (ЕАРПП)'
    ]
  },
  {
    title: 'Профессиональные интересы',
    items: [
      'Эмиграция: проблемы, адаптация, выход из кризиса',
      'Психоаналитическое исследование билингвизма'
    ]
  },
];

export const quotes = [
  'Психология — это выражение словами <br/>того, чего нельзя ими выразить.',
  'Не всякий умный человек знает психологию. <br/>Но всякий, кто знает психологию, умён.',
  'Не всякий умный человек знает психологию. <br/>Но всякий, кто знает психологию, умён.'
]

export const list_placeholder = '[-] первый пункт \n[-] второй пункт \n[-] третий пункт';

export const radioOptions: BlockNames[][] = [
  ['Заголовок', 'Текст', 'Заголовок и текст'],
  ['Цитата', 'Перечисление'],
]
