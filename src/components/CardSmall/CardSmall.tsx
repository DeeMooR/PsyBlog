import React, { ChangeEvent, FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { SwitchButton } from 'src/components'
import { IShortPostFile } from 'src/interfaces'
import { CardSmallImage } from 'src/styled'
import { updateShortPostsAction, useAppDispatch } from 'src/store'
import './CardSmall.css'
import { pencilIcon } from 'src/assets'

interface ICardSmall {
  obj: IShortPostFile, 
  isAdmin?: boolean
}

export const CardSmall:FC<ICardSmall> = ({obj, isAdmin = false}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, image, title, isActive } = obj;

  const clickCard = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('.switchButton') || target.closest('.cardSmall__pencil')) return;
    navigate(`/posts/${id}`);
  };

  const changeActivity = () => {
    const body = {isActive: !isActive};
    dispatch(updateShortPostsAction({id, body}));
  }

  const clickPencil = () => {
    navigate(`/new-post/${id}`);
  }
  
  return (
    <div className='cardSmall' onClick={clickCard}>
      <CardSmallImage image={image} />
      <div className="cardSmall__content">
        <h4 className='cardSmall__title'>{title}</h4>
        {isAdmin && 
        <>
          <div className="cardSmall__activity">
            <SwitchButton 
              isActive={isActive} 
              changeActivity={changeActivity} 
              showPrefix={false} 
              id={`${id}`} 
            />
          </div>
          <img src={pencilIcon} className='cardSmall__pencil' onClick={clickPencil} alt="pencil" />
        </>
        }
      </div>
    </div>
  )
}
