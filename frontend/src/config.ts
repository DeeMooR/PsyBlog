import { IFAQ, IQualificationChapter, IService } from "src/interfaces";
import { certificate_1, certificate_2, certificate_3, certificate_4, certificate_5, certificate_6, certificate_7, certificate_8, certificate_10, certificate_11, certificate_12, service_1, service_2, service_3 } from 'src/assets';
import { BlockNames } from "./postBlocks/interfaces";

export const services: IService[] = [
  {
    id: 1,
    image: service_1,
    name: 'Индивидуальные психоаналитические консультации',
    price: '50 €',
    time: '50 мин.'
  },
  {
    id: 2,
    image: service_2,
    name: 'Психоаналитические консультации для эмигрантов',
    price: '50 €',
    time: '50 мин.'
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
    title: 'Психологическое консультирование',
    texts: ['Онлайн-сессии в Zoom', 'Длительность сессий 50 минут', 'Первые сессии диагностические для определения направления работы и частоты встреч']
  },
];

export const faqs_right: IFAQ[] = [
  {
    title: 'Психоаналитический бизнес-коучинг',
    texts: ['Онлайн сессии в Zoom', 'Длительность сессий 60-90 минут', 'Анализ корпоративной культуры', 'Психоаналитическое консультирование руководителей', 'Диагностика мотивации персонала', 'Карьерный коучинг']
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
      'Психология',
      'Клиническая психология с основами психотерапии',
      'Психоанализ, психоаналитическая психотерапия и психоаналитическое консультирование'
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
    title: 'Частная практика',
    items: [
      'На русском и испанском языках',
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
