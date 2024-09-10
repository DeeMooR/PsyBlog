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

export interface IShortPost {
  id: number,
  title: string,
  image: string,
  isActive?: boolean,
}

export interface IShortPostWithoutId extends Omit<IShortPost, 'id'> {}

export interface IPostFields {
  id: number | null,
  title: string,
  description: string,
  image: string,
  date: string,
  isActive: boolean,
}

export interface IPostRequiredFormFields extends Omit<IPostFields, 'id' | 'isActive'> {}

export interface IPostRequiredFields extends Omit<IPostFields, 'id'> {}

export interface IOptionalPostFields extends Partial<IPostFields> {}