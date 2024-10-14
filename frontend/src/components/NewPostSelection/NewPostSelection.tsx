import React, { FC, useState } from 'react'
import { getNewPostDataSelector, getNewPostNewBlockSelector, getNewPostUpdateSelector, setNewPostErrorMessage, setNewPostNewBlock, useAppDispatch, useAppSelector } from 'src/store';
import { BlockNames } from 'src/postBlocks/interfaces';
import { radioOptions } from 'src/config';
import { RadioOption } from 'src/UI'
import { crossIcon } from 'src/assets';
import './NewPostSelection.scss'

interface INewPostSelection {
  clickClose: () => void,
}

export const NewPostSelection:FC<INewPostSelection> = ({clickClose}) => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(getNewPostDataSelector);
  const { newBlockName } = useAppSelector(getNewPostNewBlockSelector);
  const { updateName } = useAppSelector(getNewPostUpdateSelector);
  const [selected, setSelected] = useState<BlockNames | null>(null);

  const clickApplySelected = () => {
    if (newBlockName) {
      return dispatch(setNewPostErrorMessage(`Перед созданием нового блока завершите создание блока "${newBlockName}"`));
    }
    if (updateName) {
      return dispatch(setNewPostErrorMessage(`Перед созданием нового блока завершите редактирование блока "${updateName}"`));
    }
    if (!id) {
      return dispatch(setNewPostErrorMessage('Перед созданием нового блока необходимо заполнить "Основные поля"'));
    }
    if (selected) dispatch(setNewPostNewBlock(selected));
    clickClose();
  }

  return (
    <div className='newPostSelection'>
      <h4 className='newPostSelection__title'>Добавление блока</h4>
      <img src={crossIcon} className='newPostSelection__cross' onClick={clickClose} alt="cross" />
      <div className="newPostSelection__list">
        {radioOptions.map((column, index) =>
          <div className="newPostSelection__column" key={index}>
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
