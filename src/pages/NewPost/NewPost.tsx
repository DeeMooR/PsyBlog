import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header, NewPostRequired, NewPostSelection, TitleCreate, Notification, ModalConfirm } from 'src/components'
import { deletePostAction, clearNewPostMessages, getNewPostDataSelector, getNewPostSelector, useAppDispatch, useAppSelector, getPostAction, clearNewPostPostData } from 'src/store'
import { NewBlockNames } from 'src/config'
import './NewPost.css'

const openNewBlock = {
  'Заголовок': <TitleCreate />,
};

export const NewPost = () => {
  const { id: param } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { newBlockName, errorMessage, successMessage } = useAppSelector(getNewPostSelector);
  const { id } = useAppSelector(getNewPostDataSelector);
  const [showSelection, setShowSelection] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const title = id ? 'Редактирование поста' : 'Создание поста';

  useEffect(() => {
    const func = async () => {
      try {
        if (param) await dispatch(getPostAction(+param)).unwrap();
        else dispatch(clearNewPostPostData());
      } catch {
        navigate('/new-post');
      }
    }
    func();
  }, [param])

  const clickDelete = async () => {
    if (id) {
      try {
        await dispatch(deletePostAction(id)).unwrap();
        navigate('/posts');
      } catch {}
    }
    setShowModal(false);
  }

  const clearMessages = () => dispatch(clearNewPostMessages());

  return (
    <div className='newPost'>
      <Header />
      <div className='newPost__wrapper'>
        <div className="newPost__content">
          <div className='newPost__crumbs'>
            <span className='crumbs' onClick={() => navigate('/')}>Главная /</span>
            <span className='crumbs' onClick={() => navigate('/posts')}> Все посты</span>
          </div>
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
