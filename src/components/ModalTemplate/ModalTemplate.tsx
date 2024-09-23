import React, { FC, ReactNode, useEffect } from 'react'
import { displayScroll, hiddenScroll } from 'src/helpers';
import { crossIcon } from 'src/assets';
import './ModalTemplate.scss'

interface IModalTemplate {
  closeModal: () => void,
  children: ReactNode,
  className?: string,
}

export const ModalTemplate:FC<IModalTemplate> = ({ closeModal, children, className = '' }) => {
  useEffect(() => hiddenScroll(), []);
  useEffect(() => () => displayScroll(), []);

  const clickBackground = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <div className='modal__background' onClick={(e) => clickBackground(e)}>
      <div className={`modal ${className}`}>
        <div className="modal__content">
          <img src={crossIcon} className='modal__cross' onClick={closeModal} alt="cross" />
          {children}
        </div>
      </div>
    </div>
  )
}
