import React, { FC, useEffect, useState } from 'react'
import { crossIcon } from 'src/assets'
import { NotificationData } from './config';
import cls from './Notification.module.css'

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
    <div className={`${cls.wrapper} ${style}`}>
      <div className={cls.content}>
        <div className={cls.icon}>{icon}</div>
        <p className={cls.text}>{message}</p>
        <button type="button" className={cls.cross} onClick={closeModal}>
          <img src={crossIcon} alt="close" />
        </button>
      </div>
    </div>
  )
}
