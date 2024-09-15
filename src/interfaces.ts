import { NewBlockTables, NewBlockTypes } from "./components"

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


export interface IPostRequiredFieldsForm {
  title: string,
  date: Date | null,
}

export interface IPostRequiredFields {
  title: string,
  image: File | null,
  date: Date,
  isActive: boolean,
}

export interface IOptionalPostFields extends Partial<IPostRequiredFields> {}




export interface IPostBlock {
  block_number: number,
  table_name: NewBlockTables,
  fields: NewBlockTypes,
}

export interface IFullPost {
  id: number | null,
  title: string,
  image: string | null,
  date: Date | null,
  isActive: boolean,
  blocks: IPostBlock[]
}

export interface ICreateNewBlock {
  post_id: number,
  table_name: NewBlockTables,
  fields: NewBlockTypes
}

export interface IUpdateBlock {
  post_id: number,
  block_number: number,
  fields: Partial<NewBlockTypes>
}

export interface IListForm {
  text?: string | null;
  items: string;
}