import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getShortPostsAction, getShortPostsAdminAction, clearAllPostsMessages, clearAllPosts, getAdminSelector, getAllPostsSelector, useAppDispatch, useAppSelector } from 'src/store'
import { CardSmall, Footer, Header, HeaderAdmin } from 'src/components'
import { Loading, Notification } from 'src/UI'
import './AllPosts.scss'

export const AllPosts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(getAdminSelector);
  const { shortPosts, isLoading, successMessage, errorMessage } = useAppSelector(getAllPostsSelector);

  useEffect(() => () => { dispatch(clearAllPosts()) }, []);

  useEffect(() => {
    if (isAdmin) dispatch(getShortPostsAdminAction())
    else dispatch(getShortPostsAction());
  }, [isAdmin]);

  const clearMessages = () => dispatch(clearAllPostsMessages());

  return (
    <div className='allPosts'>
      {isAdmin ? <HeaderAdmin /> : <Header />}
      <div className='allPosts__wrapper'>
        <p className='crumbs' onClick={() => navigate('/')}>Главная /</p>
        <h2 className='allPosts__title'>Все статьи</h2>
        {isAdmin &&
          <button className='allPosts__btnAddPost smallBtn' onClick={() => navigate('/new-post')}>Новая статья</button>
        }
        {isLoading ? <Loading isWrapperContent /> :
          <div className="allPosts__list">
            {!!shortPosts.length ? (
              shortPosts.map(item => (
                <CardSmall obj={item} isAdmin={isAdmin} key={item.id} />
              ))
            ) : (
              <h3 className='allPosts__empty'>Статьи временно отсутствуют. Заходите позже</h3>
            )}
          </div>
        }
      </div>
      <Footer />
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </div>
  )
}
