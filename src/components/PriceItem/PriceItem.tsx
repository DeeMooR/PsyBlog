import React, { FC } from 'react'
import { clockIcon } from 'src/assets';
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
        <h5>{name}</h5>
        <div className="time">
          <img className='time__icon' src={clockIcon} />
          <p className='time__text'>{time}</p>
        </div>
      </div>
      <div className="priceItem__right">
        <p className='priceItem__price'>{price} ₽</p>
        <a className='priceItem__button btnWhite'>Записаться</a>
      </div>
    </div>
  )
}