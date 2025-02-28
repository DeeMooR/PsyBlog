import { IFAQ, IQualificationChapter, IService } from "src/interfaces";
import { certificate_1, certificate_2, certificate_3, certificate_4, certificate_5, certificate_6, certificate_7, certificate_8, certificate_10, certificate_11, certificate_12, service_1, service_2, service_3 } from 'src/assets';
import { BlockNames } from "./postBlocks/interfaces";

export const services: IService[] = [
  {
    id: 1,
    image: service_1,
    name: 'Индивидуальная психоаналитическая консультация',
    price: '40 €',
    time: '45 мин.'
  },
  {
    id: 2,
    image: service_2,
    name: 'Психоаналитическая консультация для эмигрантов',
    price: '40 €',
    time: '45 мин.'
  },
  {
    id: 3,
    image: service_3,
    name: 'Психоаналитический бизнес-коучинг',
    altText: 'Стоимость по запросу'
  }
];

export const faqs_left: IFAQ[] = [
  {
    title: 'Психологическое консультирование ',
    text: 'Онлайн-сессии в Zoom \nДлительность сессий 45 минут \nПервые сессии диагностические для определения направления и частоты встреч'
  },
];

export const faqs_right: IFAQ[] = [
  {
    title: 'Психоаналитический бизнес-коучинг',
    text: 'Онлайн сессии в Zoom \nДлительность сессий 60-90 минут  \nАнализ корпоративной культуры \nПсихоаналитическое консультирование руководителей  \nДиагностика мотивации персонала \nКарьерный коучинг'  
  },
];

export const certificates = [
  { src: certificate_11, width: 400, height: 300 },
  { src: certificate_1, width: 400, height: 300 },
  { src: certificate_2, width: 400, height: 300 },
  { src: certificate_6, width: 300, height: 400 },
  { src: certificate_3, width: 400, height: 300 },
  { src: certificate_7, width: 300, height: 400 },
  { src: certificate_12, width: 400, height: 300 },
  { src: certificate_4, width: 400, height: 300 },
  { src: certificate_5, width: 400, height: 300 },
  { src: certificate_10, width: 400, height: 300 },
  { src: certificate_8, width: 400, height: 300 },
];

export const certificates_slides: {src: string}[] = [
  { src: certificate_11 },
  { src: certificate_1 },
  { src: certificate_2 },
  { src: certificate_6 },
  { src: certificate_3 },
  { src: certificate_7 },
  { src: certificate_12 },
  { src: certificate_4 },
  { src: certificate_5 },
  { src: certificate_10 },
  { src: certificate_8 },
]

export const qualification: IQualificationChapter[] = [
  {
    title: 'Основное образование',
    items: [
      'Психоаналитический психотерапевт, клинический психолог',
      'В настоящее время прохожу обучение по программе психоанализа, психоаналитической психотерапии и консультирования (МИП)',
      'Веду частную практику с 2024 года на русском и испанском языках',
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
      'Французская школа психоанализа: об эмиграции, травме и групповой динамике',
      'Участие в конференциях'
    ]
  },
  {
    title: 'Статус и членство в организациях',
    items: [
      'Являюсь членом Европейской Ассоциации Развития Психоанализа и Психотерапии (ЕАРПП)'
    ]
  },
  {
    title: 'Профессиональные интересы',
    items: [
      'Психоаналитическое исследование эмиграции (идентичность, адаптация, билингвизм)',
      'Психоанализ бизнес-процессов'
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
