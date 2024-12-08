import { IFAQ, IQualificationChapter, IService } from "src/interfaces";
import { certificate_1, certificate_2, certificate_3, certificate_4, certificate_5, certificate_6, certificate_7, certificate_8, certificate_9, certificate_10, service_1, service_2 } from 'src/assets';
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
    name: 'Психоаналитическое бизнес-консультирование',
    description: 'По запросу',
  }
];

export const faqs_left: IFAQ[] = [
  {
    title: 'Диагностика',
    text: 'Первые три сессии диагностические в формате психоаналитической консультации для выявления сути проблемы и определения формата работы'
  },
  {
    title: 'Терапия',
    text: 'Онлайн сессии в Zoom \nДлительность каждой сессии 45 минут \nЧастота встреч определяется после первичной диагностики'  
  },
];

export const faqs_right: IFAQ[] = [
  {
    title: 'Принципы работы',
    text: 'Принимаю и уважаю особенности каждого \nГарантирую конфиденциальность \nСоблюдаю Этический кодекс Европейской Ассоциации Развития Психоанализа и Психотерапии (ЕАРПП)'
  },
];

export const certificates = [
  { src: certificate_1, width: 400, height: 300 },
  { src: certificate_2, width: 400, height: 300 },
  { src: certificate_6, width: 300, height: 400 },
  { src: certificate_3, width: 400, height: 300 },
  { src: certificate_7, width: 300, height: 400 },
  { src: certificate_4, width: 400, height: 300 },
  { src: certificate_9, width: 400, height: 300 },
  { src: certificate_5, width: 400, height: 300 },
  { src: certificate_10, width: 400, height: 300 },
  { src: certificate_8, width: 400, height: 300 },
];

export const certificates_slides: {src: string}[] = [
  { src: certificate_1 },
  { src: certificate_2 },
  { src: certificate_6 },
  { src: certificate_3 },
  { src: certificate_7 },
  { src: certificate_4 },
  { src: certificate_9 },
  { src: certificate_5 },
  { src: certificate_10 },
  { src: certificate_8 },
]

export const qualification: IQualificationChapter[] = [
  {
    title: 'Основное образование',
    items: [
      'Психолог, преподаватель психологии',
      'В настоящее время прохожу обучение по программам клинической психологии и психоанализа, психоаналитической психотерапии и консультирования',
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
      'Психоаналитическое исследование эмиграции: проблемы идентичности, адаптации, билингвизм',
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
