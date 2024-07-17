import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { upRightArrowIcon } from 'src/assets'
import { IShortCard } from 'src/interfaces'
import { CardSmallImage } from 'src/styled'
import './CardSmall.css'

interface ICardSmall {
  obj: IShortCard
}

export const CardSmall:FC<ICardSmall> = ({obj}) => {
  const navigate = useNavigate();
  const { image, title, description, date } = obj;

  const onClickCard = () => {
    navigate("/posts/1");
  }
  
  return (
    <div className='cardSmall' onClick={onClickCard}>
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
