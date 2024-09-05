import React, { FC, useState } from 'react'
import { getNewPostSelector, setNewPostErrorMessage, setNewPostNewBlockName, useAppDispatch, useAppSelector } from 'src/store';
import { RadioOption } from 'src/components'
import { radioOptions } from 'src/config';
import { crossIcon } from 'src/assets';
import './NewPostSelection.css'

interface INewPostSelection {
  clickClose: () => void,
}

export const NewPostSelection:FC<INewPostSelection> = ({clickClose}) => {
  const dispatch = useAppDispatch();
  const { newBlockName } = useAppSelector(getNewPostSelector);
  const [selected, setSelected] = useState<string>('');

  const clickApplySelected = () => {
    if (!newBlockName) {
      dispatch(setNewPostNewBlockName(selected));
      clickClose();
    } else {
      dispatch(setNewPostErrorMessage(`Перед созданием нового блока завершите создание блока "${newBlockName}"`))
    }
  }

  return (
    <div className='newPostSelection'>
      <h4 className='newPostSelection__title'>Добавление блока</h4>
      <img src={crossIcon} className='newPostSelection__cross' onClick={clickClose} alt="cross" />
      <div className="newPostSelection__list">
        {radioOptions.map(column =>
          <div className="newPostSelection__column">
            {column.map(value => 
              <RadioOption 
                value={value} 
                selected={selected} 
                name='newPostSelection' 
                onClickOption={setSelected} 
              />
            )}
          </div>
        )}
      </div>
      <button className='newPostSelection__button smallBtn' onClick={clickApplySelected} disabled={!selected}>Применить</button>
    </div>
  )
}
