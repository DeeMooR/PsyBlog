import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IShortCard } from 'src/interfaces'
import { CardSmallImage } from 'src/styled'
import './CardSmall.css'

interface ICardSmall {
  obj: IShortCard
}

export const CardSmall:FC<ICardSmall> = ({obj}) => {
  const navigate = useNavigate();
  const { id, image, title } = obj;

  const onClickCard = () => {
    navigate(`/posts/${id}`);
  }
  
  return (
    <div className='cardSmall' onClick={onClickCard}>
      <CardSmallImage image={image} />
      <h4 className='cardSmall__title'>{title}</h4>
    </div>
  )
}
