import React, { FC } from 'react'
import { scrollToSection } from 'src/helpers';
import { clockIcon, priceItemImage } from 'src/assets';
import { IService } from 'src/interfaces'
import { PriceItemImage } from 'src/styled';
import './PriceItem.css'

interface IPriceItem {
  obj: IService
}

export const PriceItem:FC<IPriceItem> = ({ obj }) => {
  const { name, price, time } = obj;

  return (
    <div className='priceItem'>
      <div className="priceItem__image">
        <PriceItemImage image={priceItemImage} />
      </div>
      <h4>{name}</h4>
      <div className="priceItem__details">
        <div className="priceItem__time">
          <img className='time__icon' src={clockIcon} />
          <p className='time__text'>{time}</p>
        </div>
        <p className='priceItem__price'>{price} ₽</p>
      </div>
    </div>
  )
}