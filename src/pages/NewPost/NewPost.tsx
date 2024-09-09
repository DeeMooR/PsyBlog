import React, { useEffect, useState } from 'react'
import { Header, NewPostRequired, NewPostSelection, TitleCreate, Notification } from 'src/components'
import { clearNewPostMessages, getNewPostDataSelector, getNewPostSelector, useAppDispatch, useAppSelector } from 'src/store'
import { NewBlockNames } from 'src/config'
import './NewPost.css'

const openNewBlock = {
  'Заголовок': <TitleCreate />,
};

export const NewPost = () => {
  const dispatch = useAppDispatch();
  const { newBlockName, errorMessage, successMessage } = useAppSelector(getNewPostSelector);
  const { id } = useAppSelector(getNewPostDataSelector);
  const [showSelection, setShowSelection] = useState(false);

  const title = id ? 'Редактирование поста' : 'Создание поста';

  const clearMessages = () => dispatch(clearNewPostMessages());

  return (
    <div className='newPost'>
      <Header />
      <div className='newPost__wrapper'>
        <h2 className='newPost__title'>{title}</h2>
        <div className='newPost__required'>
          <NewPostRequired />
        </div>
        {newBlockName &&
          <div className='newPost__newBlock'>
            {openNewBlock[newBlockName as NewBlockNames]}
          </div>
        }
        {!showSelection &&
          <div className='newPost__addBlock'>
            <div className="addBlock__line"></div>
            <div className="addBlock__plus" onClick={() => setShowSelection(true)}>+</div>
            <div className="addBlock__line"></div>
          </div>
        }
        {showSelection &&
          <div className='newPost__selection'>
            <NewPostSelection clickClose={() => setShowSelection(false)} />
          </div>
        }
      </div>
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </div>
  )
}
