import React, { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector, getNewPostNewBlockSelector, getNewPostUpdateSelector } from 'src/store';
import { getBaseBlockData } from './config';
import { crossIcon } from 'src/assets';
import './BaseBlockTemplate.scss';

interface IBaseBlockTemplate {
  children: ReactNode;
}

export const BaseBlockTemplate:FC<IBaseBlockTemplate> = ({children}) => {
  const dispatch = useAppDispatch();
  const { newBlockName } = useAppSelector(getNewPostNewBlockSelector);
  const { updateName } = useAppSelector(getNewPostUpdateSelector);
  const { title, btnApply, funcClearState } = getBaseBlockData(updateName, newBlockName);

  const clickClose = () => {
    dispatch(funcClearState);
  }

  return (
    <div className='baseBlockTemplate'>
      <h4 className="baseBlockTemplate__title">{title}</h4>
      <img src={crossIcon} className='baseBlockTemplate__cross' onClick={clickClose} alt="cross" />
      {children}
      <div className="baseBlockTemplate__buttons">
        <button type='button' className='smallBtn btnCancel' onClick={clickClose}>Отменить</button>
        <button className='smallBtn btnDark'>{btnApply}</button>
      </div>
    </div>
  )
}
