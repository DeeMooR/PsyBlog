import { scroller } from "react-scroll";
import { ICreateNewBlock, IListForm, IUpdateBlock } from "./interfaces";
import { IList, NewBlockTables, NewBlockTypes } from "./components";
import { createNewBlockAction, updateBlockAction } from "./store";
import { ListTypes, convertListTypeEng } from "./config";

interface IRequestNewBlock {
  post_id: number | null,
  newBlockTable: NewBlockTables | null,
  data: NewBlockTypes,
  dispatch: any,
}

interface IRequestUpdate {
  post_id: number | null,
  updateBlockNumber: number | null,
  data: Partial<NewBlockTypes>,
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

export const requestUpdateBlock = ({post_id, updateBlockNumber, data, dispatch}: IRequestUpdate) => {
  if (post_id && updateBlockNumber) {
    const obj: IUpdateBlock = {
      post_id,
      block_number: updateBlockNumber,
      fields: data
    }
    dispatch(updateBlockAction(obj))
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
    type: convertListTypeEng[type],
    items
  }
  return data;
}

export const convertFileToFileList = (file: File | null) => {
  const dataTransfer = new DataTransfer();
  if (file) dataTransfer.items.add(file);
  return dataTransfer.files;
}

export const convertItemsToText = (obj: IList | undefined) => {
  return obj ? ('[-] ' + obj?.items.join('\n[-] ')) : '';
}