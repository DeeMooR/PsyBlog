import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deletePostAction, clearNewPostMessages, getNewPostDataSelector, getNewPostSelector, useAppDispatch, useAppSelector, getFullPostAction, clearNewPost, getNewPostNewBlockSelector } from 'src/store'
import { NewPostRequired, NewPostSelection, ModalConfirm, HeaderAdmin, NewPostBlocks } from 'src/components'
import { Loading, Notification } from 'src/UI'
import { createBlock } from 'src/postBlocks/config'
import './NewPost.scss'

export const NewPost = () => {
  const { id: param } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, blocks } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { isLoading, isLoadingBlock, errorMessage, successMessage } = useAppSelector(getNewPostSelector);
  const title = id ? 'Редактирование статьи' : 'Создание статьи';

  const [showSelection, setShowSelection] = useState(false);
  const [modal, setModal] = useState(false);

  
  useEffect(() => () => { dispatch(clearNewPost()) }, []);

  useEffect(() => {
    const func = async () => {
      try {
        if (param) await dispatch(getFullPostAction(+param)).unwrap();
      } catch {
        navigate('/new-post');
      }
    }
    func();
  }, [param])

  const deletePost = () => {
    setModal(false);
    if (id) dispatch(deletePostAction({id, navigate}))
  }

  const clearMessages = () => dispatch(clearNewPostMessages());

  return (
    <div className='newPost'>
      <HeaderAdmin />
      <div className='newPost__wrapper'>
        <div className="newPost__content">
          <div className='newPost__crumbs'>
            <span className='crumbs' onClick={() => navigate('/')}>Главная /</span>
            <span className='crumbs' onClick={() => navigate('/posts')}> Все статьи</span>
          </div>
          <h2 className='newPost__title'>{title}</h2>
          {isLoading ? <Loading isWrapperContent /> : (
            <div className="newPost__flex">
              <div className='newPost__required'>
                <NewPostRequired />
              </div>
              {isLoadingBlock ? <Loading /> : (
                <>
                {!!blocks.length &&
                  <NewPostBlocks />
                }
                {newBlockTable &&
                  <div className='newPost__newBlock'>
                    {createBlock[newBlockTable]}
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
                </>
              )}
            </div>
          )}
        </div>
        {id && !isLoading && !isLoadingBlock &&
          <div className="newPost__btnDelete">
            <button className='smallBtn btnDelete' onClick={() => setModal(true)}>Удалить статью</button>
          </div>
        }
      </div>
      {modal && <ModalConfirm action='delete_post' clickApply={deletePost} closeModal={() => setModal(false)} />}
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </div>
  )
}
