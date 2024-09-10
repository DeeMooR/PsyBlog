import React, { useState } from 'react'
import { Header, NewPostRequired, NewPostSelection, TitleCreate, Notification, ModalConfirm } from 'src/components'
import { deletePostAction, clearNewPostMessages, getNewPostDataSelector, getNewPostSelector, useAppDispatch, useAppSelector } from 'src/store'
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
  const [showModal, setShowModal] = useState(false);

  const title = id ? 'Редактирование поста' : 'Создание поста';

  const clickDelete = () => {
    if (id) dispatch(deletePostAction(id));
    setShowModal(false);
  }

  const clearMessages = () => dispatch(clearNewPostMessages());

  return (
    <div className='newPost'>
      <Header />
      <div className='newPost__wrapper'>
        <div className="newPost__content">
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
        {id &&
          <div className="newPost__btnDelete">
            <button className='smallBtn btnDelete' onClick={() => setShowModal(true)}>Удалить пост</button>
          </div>
        }
      </div>
      {showModal && <ModalConfirm action='delete' clickApply={clickDelete} closeModal={() => setShowModal(false)} />}
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </div>
  )
}
