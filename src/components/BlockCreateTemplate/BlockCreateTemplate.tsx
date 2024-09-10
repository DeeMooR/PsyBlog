import React, { FC, ReactNode } from 'react'
import { getNewPostSelector, clearNewPostNewBlock, useAppDispatch, useAppSelector } from 'src/store';
import { crossIcon } from 'src/assets';
import './BlockCreateTemplate.css';

interface IBlockCreateTemplate {
  children: ReactNode;
}

export const BlockCreateTemplate:FC<IBlockCreateTemplate> = ({children}) => {
  const dispatch = useAppDispatch();
  const { newBlockName } = useAppSelector(getNewPostSelector);

  const clickClose = () => {
    dispatch(clearNewPostNewBlock());
  }
  
  return (
    <div className='blockCreateTemplate'>
      <h4 className="blockCreateTemplate__title">{`Создание блока "${newBlockName}"`}</h4>
      <img src={crossIcon} className='blockCreateTemplate__cross' onClick={clickClose} alt="cross" />
      {children}
    </div>
  )
}
