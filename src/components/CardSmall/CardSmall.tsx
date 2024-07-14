import React, { FC } from 'react'
import './CardSmall.css'
import { upRightArrowIcon } from 'src/assets'
import { IShortCard } from 'src/interfaces'
import { CardSmallImage } from 'src/styled'

interface ICardSmall {
  obj: IShortCard
}

export const CardSmall:FC<ICardSmall> = ({obj}) => {
  const { image, title, description, date } = obj;
  
  return (
    <div className='cardSmall'>
      <CardSmallImage image={image} />
      <div className="cardSmall__content">
        <h5 className='cardSmall__title'>{title}</h5>
        <p className='cardSmall__description'>{description}</p>
        <div className="cardSmall__bottom">
          <p className='cardSmall__date'>{date}</p>
          <img className='cardSmall__icon' src={upRightArrowIcon} />
        </div>
      </div>
    </div>
  )
}
