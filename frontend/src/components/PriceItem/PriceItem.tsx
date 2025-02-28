import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from 'src/helpers';
import { clockIcon } from 'src/assets';
import { IService } from 'src/interfaces'
import { PriceItemImage } from 'src/styled';
import './PriceItem.scss'

interface IPriceItem {
  obj: IService
}

export const PriceItem:FC<IPriceItem> = ({ obj }) => {
  const navigate = useNavigate();
  const { image, name, price, time, altText } = obj;

  // const titleStyle = cn({
  //   titleHeight: !time && !price,
  // });

  return (
    <div className='priceItem'>
      <div className="priceItem__image">
        <PriceItemImage image={image} />
      </div>
      <h4>{name}</h4>
      <div className="priceItem__details">
        {(time && price) &&
          <div className='priceItem__timePrice'>
            <div className="priceItem__time">
              <img className='time__icon' src={clockIcon} />
              <p className='time__text'>{time}</p>
            </div>
            <p className='priceItem__price'>{price}</p>
          </div>
        }
        {altText &&
          <p className='priceItem__altText'>{altText}</p>
        }
      </div>
      <button onClick={() => scrollToSection('contacts', navigate, -80)} className='btnDark priceItem__button'>Записаться</button>
    </div>
  )
}