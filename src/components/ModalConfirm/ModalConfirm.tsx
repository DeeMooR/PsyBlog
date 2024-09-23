import React, { FC } from 'react'
import cn from 'classnames';
import { ModalTemplate } from 'src/components';
import { ModalConfirmActionType, ModalConfirmData, isModalDelete } from './config';
import './ModalConfirm.scss'

interface IModalConfirm {
  action: ModalConfirmActionType,
  clickApply: () => void,
  closeModal: () => void
}

export const ModalConfirm:FC<IModalConfirm> = ({action, clickApply, closeModal}) => {
  const { title, btnApply } = ModalConfirmData[action];
  const isDelete = isModalDelete(action);

  const btnApplyStyle = cn({
    btnDelete: isDelete,
  });

  return (
    <ModalTemplate closeModal={closeModal} className={isDelete ? 'isDelete' : ''}>
      <div className="modalConfirm">
        <h3>{title}</h3>
        <div className="modalConfirm__buttons">
          <button className='btnCancel' onClick={closeModal}>Нет, оставить</button>
          <button className={btnApplyStyle} onClick={clickApply}>{btnApply}</button>
        </div>
      </div>
    </ModalTemplate>
  )
}
