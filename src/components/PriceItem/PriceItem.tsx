import React, { FC } from 'react'
import { ClockIcon } from 'src/assets';
import { IService } from 'src/interfaces'
import './PriceItem.css'

interface IPriceItem {
  obj: IService
}

export const PriceItem:FC<IPriceItem> = ({ obj }) => {
  const { name, price, time } = obj;

  return (
    <div className='priceItem'>
      <div className="priceItem__left">
        <h4>{name}</h4>
        <div className="time">
          <ClockIcon className='time__icon' />
          <p className='time__text'>{time}</p>
        </div>
      </div>
      <div className="priceItem__right">
        <p className='priceItem__price'>{price} ₽</p>
        <a className='priceItem__buttonToForm'>Записаться</a>
      </div>
    </div>
  )
}