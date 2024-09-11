import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header, NewPostRequired, NewPostSelection, Notification, ModalConfirm, ITitle, Title, TitleCreate, Blockquote, IBlockquote } from 'src/components'
import { deletePostAction, clearNewPostMessages, getNewPostDataSelector, getNewPostSelector, useAppDispatch, useAppSelector, getFullPostAction, clearNewPostPostData } from 'src/store'
import './NewPost.css'
import { basketIcon, pencilIcon } from 'src/assets'

const showBlock = {
  'title': (obj: ITitle) => <Title obj={obj} />,
  'text': (obj: ITitle) => <Title obj={obj} />,
  'title_and_text': (obj: ITitle) => <Title obj={obj} />,
  'quote': (obj: IBlockquote) => <Blockquote obj={obj} />,
  'list_point': (obj: ITitle) => <Title obj={obj} />,
  'list_number': (obj: ITitle) => <Title obj={obj} />,
};

const createBlock = {
  'title': <TitleCreate />,
  'text': <TitleCreate />,
  'title_and_text': <TitleCreate />,
  'quote': <TitleCreate />,
  'list_point': <TitleCreate />,
  'list_number': <TitleCreate />,
};

export const NewPost = () => {
  const { id: param } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { newBlockTable, errorMessage, successMessage } = useAppSelector(getNewPostSelector);
  const { id, blocks } = useAppSelector(getNewPostDataSelector);
  const [showSelection, setShowSelection] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const title = id ? 'Редактирование статьи' : 'Создание статьи';

  useEffect(() => {
    const func = async () => {
      try {
        if (param) await dispatch(getFullPostAction(+param)).unwrap();
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
            <span className='crumbs' onClick={() => navigate('/posts')}> Все статьи</span>
          </div>
          <h2 className='newPost__title'>{title}</h2>
          <div className='newPost__required'>
            <NewPostRequired />
          </div>
          <div className="newPost__blocks">
            {blocks.map(({table_name, fields}) => 
              <div className="block__wrapper">
                <div className="block__content">
                  {showBlock[table_name](fields as any)}
                </div>
                <div className="block__icons">
                  <img src={pencilIcon} alt="pencil" />
                  <img src={basketIcon} alt="basket" />
                </div>
              </div>
            )}
          </div>
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
        </div>
        {id &&
          <div className="newPost__btnDelete">
            <button className='smallBtn btnDelete' onClick={() => setShowModal(true)}>Удалить статью</button>
          </div>
        }
      </div>
      {showModal && <ModalConfirm action='delete' clickApply={clickDelete} closeModal={() => setShowModal(false)} />}
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </div>
  )
}
