import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NewPostRequired, NewPostSelection, Notification, ModalConfirm, TitleCreate, TextCreate, BlockquoteCreate, TitleAndTextCreate, ListCreate, HeaderAdmin, NewPostBlocks, Loading } from 'src/components'
import { deletePostAction, clearNewPostMessages, getNewPostDataSelector, getNewPostSelector, useAppDispatch, useAppSelector, getFullPostAction, clearNewPost, getNewPostNewBlockSelector, getNewPostUpdateSelector } from 'src/store'
import './NewPost.css'
import { IPostBlock } from 'src/interfaces'

const createBlock = {
  'title': <TitleCreate />,
  'text': <TextCreate />,
  'title_and_text': <TitleAndTextCreate />,
  'quote': <BlockquoteCreate />,
  'list': <ListCreate />,
};

export const NewPost = () => {
  const { id: param } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { isLoading, isLoadingBlock, errorMessage, successMessage } = useAppSelector(getNewPostSelector);
  const { id, blocks } = useAppSelector(getNewPostDataSelector);

  const [showSelection, setShowSelection] = useState(false);
  const [modal, setModal] = useState(false);

  const title = id ? 'Редактирование статьи' : 'Создание статьи';

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

  const deletePost = async () => {
    setModal(false);
    if (id) {
      try {
        await dispatch(deletePostAction(id)).unwrap();
        navigate('/posts');
      } catch {}
    }
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
