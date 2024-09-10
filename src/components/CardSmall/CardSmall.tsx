import React, { ChangeEvent, FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { SwitchButton } from 'src/components'
import { IShortPost } from 'src/interfaces'
import { CardSmallImage } from 'src/styled'
import { updateShortPostsAction, useAppDispatch } from 'src/store'
import './CardSmall.css'

interface ICardSmall {
  obj: IShortPost, 
  isAdmin?: boolean
}

export const CardSmall:FC<ICardSmall> = ({obj, isAdmin = false}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, image, title, isActive } = obj;

  const onClickCard = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest('.switchButton')) return;
    navigate(`/posts/${id}`);
  };

  const changeActivity = () => {
    const body = {isActive: !isActive};
    dispatch(updateShortPostsAction({id, body}));
  }
  
  return (
    <div className='cardSmall' onClick={onClickCard}>
      <CardSmallImage image={image} />
      <div className="cardSmall__content">
        <h4 className='cardSmall__title'>{title}</h4>
        {isAdmin && 
          <SwitchButton 
            isActive={isActive} 
            changeActivity={changeActivity} 
            showPrefix={false} 
            id={`${id}`} 
          />
        }
      </div>
    </div>
  )
}
