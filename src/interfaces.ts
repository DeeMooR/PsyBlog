import { BlockTables, BlockTypes } from "src/postBlocks/interfaces";

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

export interface IUser {
  id: number,
  name: string,
  email: string,
  phone: string,
  date: string
}

export interface IUserWithoutId extends Omit<IUser, 'id'> {}

export interface IUserForm extends Omit<IUser, 'id' | 'date'> {}

export interface IAuth {
  login: string,
  password: string,
}

export interface IShortPost {
  id: number,
  title: string,
  image: string,
  isActive?: boolean,
  topPriority?: boolean,
}

export interface IShortPostWithoutId extends Omit<IShortPost, 'id'> {}

export interface IPostRequiredFields {
  title: string,
  image: File | null,
  date: Date,
  isActive: boolean,
  topPriority: boolean,
}

export interface IOptionalPostFields extends Partial<IPostRequiredFields> {}

export interface IPostRequiredFieldsForm {
  title: string,
  date: Date | null,
}

export interface IPostBlock {
  block_number: number,
  table_name: BlockTables,
  fields: BlockTypes,
}

export interface IFullPost {
  id: number | null,
  title: string,
  image: string | null,
  date: Date | null,
  isActive: boolean,
  topPriority: boolean,
  blocks: IPostBlock[]
}

export interface ICreateBlock {
  post_id: number,
  table_name: BlockTables,
  fields: BlockTypes
}

export interface IUpdateBlock {
  post_id: number,
  block_number: number,
  fields: Partial<BlockTypes>
}

export interface IListForm {
  text?: string | null;
  items: string;
}

export interface IRequestNewBlock {
  post_id: number | null,
  newBlockTable: BlockTables | null,
  data: BlockTypes,
  dispatch: any,
}

export interface IRequestUpdate {
  post_id: number | null,
  updateBlockNumber: number | null,
  data: Partial<BlockTypes>,
  dispatch: any,
}