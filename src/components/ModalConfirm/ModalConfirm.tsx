import React, { FC } from 'react'
import cn from 'classnames';
import { ModalTemplate } from 'src/components';
import { ModalConfirmData } from './config';
import './ModalConfirm.css'

interface IModalConfirm {
  action: 'update' | 'delete_post' | 'delete_block'
  clickApply: () => void,
  closeModal: () => void
}

export const ModalConfirm:FC<IModalConfirm> = ({action, clickApply, closeModal}) => {
  const { title, btnYes, btnNo } = ModalConfirmData[action];
  const isDelete = action === 'delete_post' || action === 'delete_block';

  const btnApplyStyle = cn({
    btnDelete: isDelete,
  });

  return (
    <ModalTemplate closeModal={closeModal} className={isDelete ? 'isDelete' : ''}>
      <div className="modalConfirm">
        <h3>{title}</h3>
        <div className="modalConfirm__buttons">
          <button className='btnCancel' onClick={closeModal}>{btnNo}</button>
          <button className={btnApplyStyle} onClick={clickApply}>{btnYes}</button>
        </div>
      </div>
    </ModalTemplate>
  )
}
