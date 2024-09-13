import React, { FC, ReactNode } from 'react'
import { getNewPostSelector, clearNewPostNewBlock, useAppDispatch, useAppSelector, getNewPostNewBlockSelector, getNewPostUpdateSelector, clearNewPostUpdate } from 'src/store';
import { crossIcon } from 'src/assets';
import './BlockCreateTemplate.css';

interface IBlockCreateTemplate {
  children: ReactNode;
}

export const BlockCreateTemplate:FC<IBlockCreateTemplate> = ({children}) => {
  const dispatch = useAppDispatch();
  const { newBlockName } = useAppSelector(getNewPostNewBlockSelector);
  const { updateName } = useAppSelector(getNewPostUpdateSelector);
  const title = updateName ? updateName : newBlockName;

  const clickClose = () => {
    dispatch(clearNewPostNewBlock());
    dispatch(clearNewPostUpdate());
  }
  
  return (
    <div className='blockCreateTemplate'>
      <h4 className="blockCreateTemplate__title">{`Создание блока "${title}"`}</h4>
      <img src={crossIcon} className='blockCreateTemplate__cross' onClick={clickClose} alt="cross" />
      {children}
      <div className="blockCreateTemplate__buttons">
        <button type='button' className='smallBtn btnCancel' onClick={clickClose}>Отменить</button>
        <button className='smallBtn btnDark'>{updateName ? 'Изменить' : 'Сохранить'}</button>
      </div>
    </div>
  )
}
