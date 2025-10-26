import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from 'src/helpers';
import { clockIcon } from 'src/assets';
import { IService } from 'src/interfaces'
import { PriceItemImage } from 'src/styled';
import cls from './PriceItem.module.css'

interface IPriceItem {
  obj: IService
}

export const PriceItem:FC<IPriceItem> = ({ obj }) => {
  const navigate = useNavigate();
  const { image, name, price, time } = obj;

  return (
    <div className={cls.container}>
      <div className={cls.image}>
        <PriceItemImage image={image} />
      </div>
      <h4>{name}</h4>
      <div className={cls.info}>
        {(time && price) ? (
          <div className={cls.timePrice}>
            <div className={cls.time__wrapper}>
              <img className={cls.time__icon} src={clockIcon} />
              <p className={cls.time__text}>{time}</p>
            </div>
            <p className={cls.price}>{price}</p>
          </div>
        ) : (
          <p className={cls.price__request}>Стоимость по запросу</p>
        )}
      </div>
      <button onClick={() => scrollToSection('contacts', navigate, -80)} className={`${cls.button} btnDark`}>Записаться</button>
    </div>
  )
}