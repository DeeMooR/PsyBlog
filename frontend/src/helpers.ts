import { scroller } from "react-scroll";
import { NavigateFunction } from "react-router-dom";
import { ICreateBlock, IListForm, IRequestNewBlock, IRequestUpdate, IUpdateBlock } from "./interfaces";
import { createBlockAction, updateBlockAction } from "./store";
import { IList, ListTypes, convertListTypeEng } from "./postBlocks/interfaces";

export const scrollToSection = async (page: string, navigate: NavigateFunction, padding: number = -60) => {
  await navigate('/');
  scroller.scrollTo(page, {
    duration: 700,
    delay: 0,
    smooth: 'easeOutQuart',
    offset: padding
  });
};

export const requestNewBlock = ({post_id, newBlockTable, data, dispatch}: IRequestNewBlock) => {
  if (post_id && newBlockTable) {
    const obj: ICreateBlock = {
      post_id,
      table_name: newBlockTable,
      fields: data
    }
    dispatch(createBlockAction(obj))
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

export const createObjList = (form: IListForm, type: ListTypes) => {
  const items = form.items
    .split('[-]')
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

export const convertListItemsToText = (obj: IList | undefined) => {
  return obj ? ('[-] ' + obj?.items.join('\n[-] ')) : '';
}

export const formatDate = (date: Date) => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня','июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export const formatISOToShortDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const isMobileOrTablet = () => {
  const userAgent = navigator.userAgent;
  const isMobile = /Mobi/i.test(userAgent);
  const isTablet = /Tablet/i.test(userAgent);
  return isMobile || isTablet;
}

export const hiddenScroll = () => {
  document.body.style.overflowY = 'hidden';
  if (!isMobileOrTablet()) {
    const header = document.querySelector('header');
    document.body.style.padding = '0 17px 0 0';
    if (header) header.style.padding = '0 17px 0 0';
  }
}

export const displayScroll = () => {
  document.body.style.overflowY = 'scroll';
  if (!isMobileOrTablet()) {
    const header = document.querySelector('header');
    document.body.style.padding = '0';
    if (header) header.style.padding = '0';
  }
}

export const formatTextLines = (text: string) => {
  return text.split('\n').join('<br />');
};