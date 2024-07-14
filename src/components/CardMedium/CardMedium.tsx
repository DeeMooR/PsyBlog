import React, { FC } from 'react'
import { IShortCard } from 'src/interfaces';
import { CardMediumImage } from 'src/styled';
import './CardMedium.css'

interface ICardMedium {
  obj: IShortCard
}

export const CardMedium:FC<ICardMedium> = ({obj}) => {
  const { image, title, description, date } = obj;
  
  return (
    <div className='cardMedium'>
      <div className="cardMedium__image">
        <CardMediumImage image={image} />
      </div>
      <div className="cardMedium__content">
        <p className='cardMedium__date'>{date}</p>
        <h5 className='cardMedium__title'>{title}</h5>
        <p className='cardMedium__description'>{description}</p>
      </div>
    </div>
  )
}
