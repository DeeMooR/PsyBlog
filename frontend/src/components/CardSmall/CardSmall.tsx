import React, { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateShortPostsAction, useAppDispatch } from 'src/store'
import { SwitchButton } from 'src/UI'
import { IOptionalPostFields, IShortPost } from 'src/interfaces'
import { CardImage } from 'src/styled'
import { pencilIcon } from 'src/assets'
import './CardSmall.scss'

interface ICardSmall {
  obj: IShortPost, 
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
    let body: IOptionalPostFields = {isActive: !isActive};
    if (isActive == true) body.topPriority = false;
    dispatch(updateShortPostsAction({id, body}));
  }

  const clickPencil = () => {
    navigate(`/new-post/${id}`);
  }
  
  return (
    <div className='cardSmall' onClick={clickCard}>
      <CardImage image={image} />
      <div className="cardSmall__content">
        <h4 className='cardSmall__title'>{title}</h4>
        {isAdmin && 
        <>
          <div className="cardSmall__activity">
            <SwitchButton 
              id={`${id}`} 
              isActive={isActive} 
              changeActivity={changeActivity} 
            />
          </div>
          <img src={pencilIcon} className='cardSmall__pencil' onClick={clickPencil} alt="pencil" />
        </>
        }
      </div>
    </div>
  )
}
