import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Footer, Header, Text, Title, TitleAndText, Image, TwoImages, Blockquote, List, HeaderAdmin, Loading, Wait } from 'src/components'
import { IImage, IList, IBlockquote, ITwoImages, ITitle, IText, ITitleAndText } from 'src/components/newPost'
import { clearPost, getAdminSelector, getFullPostAction, getNewPostDataSelector, getPostDataSelector, getPostSelector, setAllPostsErrorMessage, useAppDispatch, useAppSelector } from 'src/store'
import { post_1, post_2, post_3, humanIcon } from 'src/assets'
import { PostImage } from 'src/styled'
import './Post.css'
import { formatDate } from 'src/helpers'

const showBlock = {
  'title': (obj: ITitle) => <Title obj={obj} />,
  'text': (obj: IText) => <Text obj={obj} />,
  'title_and_text': (obj: ITitleAndText) => <TitleAndText obj={obj} />,
  'quote': (obj: IBlockquote) => <Blockquote obj={obj} />,
  'list': (obj: IList) => <List obj={obj} />,
};

export const Post = () => {
  const { id: param } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, title, image, date, blocks, isActive } = useAppSelector(getPostDataSelector);
  const { isLoading, errorMessage } = useAppSelector(getPostSelector)
  const { isAdmin } = useAppSelector(getAdminSelector);

  useEffect(() => () => { dispatch(clearPost()) }, []);

  useEffect(() => {
    if (param) dispatch(getFullPostAction(+param));
  }, [param]);

  useEffect(() => {
    if (errorMessage) {
      dispatch(setAllPostsErrorMessage(errorMessage));
      navigate('/posts');
    }
  }, [errorMessage])

  useEffect(() => {
    if (id && !isActive && !isAdmin) {
      dispatch(setAllPostsErrorMessage('Статья временно недоступна. Повторите попытку позже'));
      navigate('/posts');
    }
  }, [id])

  console.log(isLoading)

  return (
    <div className='post'>
      {isAdmin ? <HeaderAdmin /> : <Header />}
        <div className='post__wrapper'>
          {isLoading ? <Loading isPage /> : (
            <>
            <div className='post__crumbs'>
              <span className='crumbs' onClick={() => navigate('/')}>Главная /</span>
              <span className='crumbs' onClick={() => navigate('/posts')}> Все статьи</span>
            </div>
            <p className='post__title'>{title}</p>
            <div className="post__shortInfo">
              <div className="post__author">
                <img className='author__icon' src={humanIcon} />
                <p className="author__text">Ольга Разваляева</p>
              </div>
              {date && <p className="post__date">{formatDate(new Date(date))}</p>}
            </div>
            <div className="post__image">
              <PostImage image={image} />
              <div className="imageBorder" />
            </div>
            <div className="post__content">
              {blocks.map(({table_name, fields}) => 
                showBlock[table_name](fields as any)
              )}
            </div>
            </>
          )}
        </div>
      <Footer />
    </div>
  )
}
