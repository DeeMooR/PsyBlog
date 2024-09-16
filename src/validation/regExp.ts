// имя
export const NAME_PATTERN = /^[a-zа-яё]+(?:-[a-zа-яё]+)?$/iu;

// почта
export const EMAIL_PATTERN = /^$|^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

// список
export const LIST_PATTERN = /^(\[-\] .+\n?)+$/gm;