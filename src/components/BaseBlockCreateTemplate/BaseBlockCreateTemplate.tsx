import React, { FC, ReactNode } from 'react'
import { clearNewPostNewBlock, useAppDispatch, useAppSelector, getNewPostNewBlockSelector, getNewPostUpdateSelector, clearNewPostUpdate, getNewPostDataSelector } from 'src/store';
import { crossIcon } from 'src/assets';
import './BaseBlockCreateTemplate.css';
import { BaseBlockCreateData } from './config';

interface IBaseBlockCreateTemplate {
  children: ReactNode;
}

export const BaseBlockCreateTemplate:FC<IBaseBlockCreateTemplate> = ({children}) => {
  const dispatch = useAppDispatch();
  const { newBlockName } = useAppSelector(getNewPostNewBlockSelector);
  const { updateName } = useAppSelector(getNewPostUpdateSelector);
  const blockType = updateName ? 'update' : 'create';
  const blockName = updateName ? updateName : newBlockName;
  const { title, btnApply, funcClearState } = BaseBlockCreateData[blockType](blockName);

  const clickClose = () => {
    dispatch(funcClearState);
  }

  return (
    <div className='baseBlockCreateTemplate'>
      <h4 className="baseBlockCreateTemplate__title">{title}</h4>
      <img src={crossIcon} className='baseBlockCreateTemplate__cross' onClick={clickClose} alt="cross" />
      {children}
      <div className="baseBlockCreateTemplate__buttons">
        <button type='button' className='smallBtn btnCancel' onClick={clickClose}>Отменить</button>
        <button className='smallBtn btnDark'>{btnApply}</button>
      </div>
    </div>
  )
}
