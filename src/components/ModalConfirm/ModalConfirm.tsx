import React, { FC } from 'react'
import cn from 'classnames';
import { ModalTemplate } from 'src/components';
import { ModalConfirmData } from './config';
import './ModalConfirm.css'

interface IModalConfirm {
  action: 'update_post' | 'update_block' | 'delete_post' | 'delete_block' | 'delete_user'
  clickApply: () => void,
  closeModal: () => void
}

export const ModalConfirm:FC<IModalConfirm> = ({action, clickApply, closeModal}) => {
  const { title, btnApply } = ModalConfirmData[action];
  const isDelete = action === 'delete_post' || action === 'delete_block' || action === 'delete_user';

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
