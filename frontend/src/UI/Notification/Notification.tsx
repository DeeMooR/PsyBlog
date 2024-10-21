import React, { FC, useEffect, useState } from 'react'
import { crossIcon } from 'src/assets'
import { NotificationData } from './config';
import './Notification.scss'

interface INotification {
  type: 'error' | 'success',
  message: string,
  displayTime?: number,
  clearMessage?: () => void,
}

export const Notification:FC<INotification> = ({type, message, displayTime = 3500, clearMessage}) => {
  const { icon, style } = NotificationData[type];
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(closeModal, displayTime);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    if (clearMessage) clearMessage();
  }

  return !isVisible ? null : (
    <div className={`notification ${style}`}>
      <div className="notification__wrapper">
        <div className="notification__icon">{icon}</div>
        <p className='notification__text'>{message}</p>
        <button type="button" className='notification__cross' onClick={closeModal}>
          <img src={crossIcon} alt="close" />
        </button>
      </div>
    </div>
  )
}
