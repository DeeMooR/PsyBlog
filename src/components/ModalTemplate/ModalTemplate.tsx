import React, { FC, ReactNode, useEffect } from 'react'
import { crossIcon } from 'src/assets';
import './ModalTemplate.css'

interface IModalTemplate {
  closeModal: () => void,
  children: ReactNode,
  className?: string,
}

export const ModalTemplate:FC<IModalTemplate> = ({ closeModal, children, className = '' }) => {

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
