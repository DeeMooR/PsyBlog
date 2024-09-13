import { scroller } from "react-scroll";
import { ICreateNewBlock, IListForm } from "./interfaces";
import { NewBlockTables, NewBlockTypes } from "./components";
import { createNewBlockAction } from "./store";
import { ListTypes, convert_list_type } from "./config";

interface IRequestNewBlock {
  post_id: number | null,
  newBlockTable: NewBlockTables | null,
  data: NewBlockTypes,
  dispatch: any,
}

export const scrollToSection = (page: string, padding?: number) => {
  scroller.scrollTo(page, {
    duration: 700,
    delay: 0,
    smooth: 'easeOutQuart',
    offset: padding || -60
  });
};

export const requestNewBlock = ({post_id, newBlockTable, data, dispatch}: IRequestNewBlock) => {
  if (post_id && newBlockTable) {
    const obj: ICreateNewBlock = {
      post_id,
      table_name: newBlockTable,
      fields: data
    }
    dispatch(createNewBlockAction(obj))
  }
}

export const createObjListCreate = (form: IListForm, type: ListTypes) => {
  const items = form.items
    .split('\n')
    .map(item => item.substring(3)) // удалить [-]
    .map(item => item.trim())
    .filter(item => item !== '');
  const data = {
    text: form.text || null,
    type: convert_list_type[type],
    items
  }
  return data;
}