import React, { FC } from 'react'
import cn from 'classnames';
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
  const { image, name, description, price, time } = obj;

  const titleStyle = cn({
    titleHeight: !time && !price,
  });

  return (
    <div className='priceItem'>
      <div className="priceItem__image">
        <PriceItemImage image={image} />
      </div>
      <h4 className={titleStyle}>{name}</h4>
      <div className="priceItem__details">
        <p className="priceItem__description">{description}</p>
        {(time || price) &&
          <div className='priceItem__timePrice'>
            {time &&
              <div className="priceItem__time">
                <img className='time__icon' src={clockIcon} />
                <p className='time__text'>{time}</p>
              </div>
            }
            {price && <p className='priceItem__price'>{price}</p>}
          </div>
        }
      </div>
      <button onClick={() => scrollToSection('contacts', navigate, -80)} className='btnDark priceItem__button'>Записаться</button>
    </div>
  )
}