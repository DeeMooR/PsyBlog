export interface IService {
  id: number,
  image: string,
  name: string,
  description: string,
  price?: string,
  time?: string,
}

export interface IFAQ {
  id: number,
  title: string,
  text: string,
}

export interface ICard {
  id: number,
  title: string,
  text: string,
  image: string,
  date: string,
}

export interface IOrderForm {
  name: string,
  email: string,
  phone: string,
}

export interface IShortCard {
  id: number,
  title: string,
  description: string,
  image: string,
  date: string,
}

export interface IShortCardWithoutId extends Omit<IShortCard, 'id'> {}

export interface IPostFields {
  id: string,
  title: string,
  description: string,
  image: string,
  date: string,
  isActive: boolean,
}

export interface IPostRequiredFormFields extends Omit<IPostFields, 'id' | 'isActive'> {}

export interface IPostRequiredFields extends Omit<IPostFields, 'id'> {}
