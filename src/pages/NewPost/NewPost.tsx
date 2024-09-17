import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header, NewPostRequired, NewPostSelection, Notification, ModalConfirm, TitleCreate, ShowBlockInNewPost, TextCreate, BlockquoteCreate, TitleAndTextCreate, ListCreate, ITitle, IText, ITitleAndText, IBlockquote, IList, HeaderAdmin } from 'src/components'
import { deletePostAction, clearNewPostMessages, getNewPostDataSelector, getNewPostSelector, useAppDispatch, useAppSelector, getFullPostAction, clearNewPostPostData, getNewPostNewBlockSelector, getNewPostUpdateSelector } from 'src/store'
import './NewPost.css'
import { IPostBlock } from 'src/interfaces'

const createBlock = {
  'title': <TitleCreate />,
  'text': <TextCreate />,
  'title_and_text': <TitleAndTextCreate />,
  'quote': <BlockquoteCreate />,
  'list': <ListCreate />,
};

const updateBlock = {
  'title': (obj: ITitle) => <TitleCreate obj={obj} />,
  'text': (obj: IText) => <TextCreate obj={obj} />,
  'title_and_text': (obj: ITitleAndText) => <TitleAndTextCreate obj={obj} />,
  'quote': (obj: IBlockquote) => <BlockquoteCreate obj={obj} />,
  'list': (obj: IList) => <ListCreate obj={obj} />,
};

export const NewPost = () => {
  const { id: param } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { updateTable, updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);
  const { errorMessage, successMessage } = useAppSelector(getNewPostSelector);
  const { id, blocks } = useAppSelector(getNewPostDataSelector);

  const [showSelection, setShowSelection] = useState(false);
  const [modal, setModal] = useState(false);

  const title = id ? 'Редактирование статьи' : 'Создание статьи';

  useEffect(() => {
    dispatch(clearNewPostPostData());
  }, []);

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
    if (id) {
      try {
        await dispatch(deletePostAction(id)).unwrap();
        navigate('/posts');
      } catch {}
    }
    setModal(false);
  }

  const itemIsUpdate = (obj: IPostBlock) => {
    return updateTable === obj.table_name && updateBlockNumber === obj.block_number;
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
          <div className="newPost__flex">
            <div className='newPost__required'>
              <NewPostRequired />
            </div>
            {!!blocks.length &&
              <div className="newPost__blocks">
                {blocks.map((obj, index) => (
                  itemIsUpdate(obj) && updateTable ? (
                    <div className="newPost__updateBlock" key={index}>
                      {/* @ts-ignore */}
                      {updateBlock[updateTable](obj.fields)}
                    </div>
                  ) : (
                    <ShowBlockInNewPost obj={obj} key={index} />
                  )
                ))}
              </div>
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
          </div>
        </div>
        {id &&
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
