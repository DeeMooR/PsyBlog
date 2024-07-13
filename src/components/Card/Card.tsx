import React, { FC } from 'react'
import './Card.css'
import { upRightArrowIcon } from 'src/assets'
import { IShortCard } from 'src/interfaces'
import { CardImage } from 'src/styled'

interface ICard {
  obj: IShortCard
}

export const Card:FC<ICard> = ({obj}) => {
  const { image, title, description, date } = obj;
  
  return (
    <div className='card'>
      <CardImage image={image} />
      <div className="card__content">
        <h5 className='card__title'>{title}</h5>
        <p className='card__description'>{description}</p>
        <div className="card__bottom">
          <p className='card__date'>{date}</p>
          <img className='card__icon' src={upRightArrowIcon} />
        </div>
      </div>
    </div>
  )
}
