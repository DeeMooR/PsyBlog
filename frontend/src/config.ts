import { IFAQ, IQualificationChapter, IService } from "src/interfaces";
import { certificate_1, certificate_13, certificate_2, certificate_3, certificate_4, certificate_5, certificate_6, certificate_7, certificate_8, certificate_10, certificate_11, certificate_12, service_1, service_2, service_3 } from 'src/assets';
import { BlockNames } from "./postBlocks/interfaces";

export const services: IService[] = [
  {
    id: 1,
    image: service_1,
    name: 'Индивидуальные психоаналитические консультации',
    price: '35 €',
    time: '45 мин.'
  },
  {
    id: 2,
    image: service_2,
    name: 'Психоаналитические консультации для эмигрантов',
    price: '35 €',
    time: '45 мин.'
  },
  {
    id: 3,
    image: service_3,
    name: 'Психоаналитический бизнес-коучинг',
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
  { src: certificate_11, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_1, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_2, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_6, width: 300, height: 400, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_13, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_3, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_7, width: 300, height: 400, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_12, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_4, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_5, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_10, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
  { src: certificate_8, width: 400, height: 300, alt: 'Диплом и сертификат психолога Ольги Разваляевой' },
];

export const certificates_slides: {src: string}[] = [
  { src: certificate_11 },
  { src: certificate_1 },
  { src: certificate_2 },
  { src: certificate_6 },
  { src: certificate_13 },
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
      'Диплом о профессиональной переподготовке по направлению «Психология» (психолог-консультант, преподаватель психологии)',
      'Диплом о профессиональной переподготовке по направлению «Клиническая психология» (клинический психолог)',
      'Программа «Психоанализ, психоаналитическая психотерапия и психоаналитическое консультирование» (окончание  2026 г.)',
      'Кандидат экономических наук'
    ]
  },
  {
    title: 'Повышение квалификации',
    items: [
      'Психоаналитическое консультирование',
      'Основы кризисного консультирования. Профилактика посттравматических стрессовых расстройств (ПТСР)',
      'Травма отношений и её последствия: практика нейропсихоаналитической работы',
      'Эмиграция и релокация: особенности психотерапии с клиентами в релокации',
      'Французская школа психоанализа: об эмиграции, травме и групповой динамике'
    ]
  },
  {
    title: 'Профессиональные принципы',
    items: [
      'Конфиденциальность и уважение личных границ',
      'Регулярная супервизия и личная терапия',
      'Этический кодекс: информированное согласие, безоценочность, бережное отношение к клиенту'
    ]
  },
  {
    title: 'Профессиональное сообщество',
    items: [
      'Член Европейской Ассоциации Развития Психоанализа и Психотерапии (ЕАРПП)'
    ]
  },
  {
    title: 'Языки работы',
    items: [
      'Русский, испанский',
    ]
  },
];

export const list_placeholder = '[-] первый пункт \n[-] второй пункт \n[-] третий пункт';

export const radioOptions: BlockNames[][] = [
  ['Заголовок', 'Текст', 'Заголовок и текст'],
  ['Цитата', 'Перечисление'],
]
