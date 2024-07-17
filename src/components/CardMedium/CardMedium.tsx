import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { IShortCard } from 'src/interfaces';
import { CardMediumImage } from 'src/styled';
import './CardMedium.css'

interface ICardMedium {
  obj: IShortCard
}

export const CardMedium:FC<ICardMedium> = ({obj}) => {
  const navigate = useNavigate();
  const { image, title, description, date } = obj;

  const onClickCard = () => {
    navigate("/posts/1");
  }
  
  return (
    <div className='cardMedium' onClick={onClickCard}>
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
