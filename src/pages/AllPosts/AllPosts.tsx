import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardSmall, Footer, Header, Loading, Notification } from 'src/components'
import { getShortPostsAction, getShortPostsAdminAction, clearAllPostsMessages, getAdminSelector, getAllPostsSelector, useAppDispatch, useAppSelector } from 'src/store'
import './AllPosts.css'

export const AllPosts = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(getAdminSelector);
  const { shortPosts, isLoading, successMessage, errorMessage } = useAppSelector(getAllPostsSelector);

  console.log(shortPosts)

  useEffect(() => {
    if (isAdmin) dispatch(getShortPostsAdminAction())
    else dispatch(getShortPostsAction());
  }, [isAdmin]);

  const clearMessages = () => dispatch(clearAllPostsMessages());

  return (
    <div className='allPosts'>
      <Header />
      <div className='allPosts__wrapper'>
        <p className='allPosts__crumbs crumbs' onClick={() => navigate('/')}>Главная /</p>
        <h2 className='allPosts__title'>Все статьи</h2>
        {isAdmin &&
          <button className='allPosts__btnAddPost smallBtn' onClick={() => navigate('/new-post')}>Новая статья</button>
        }
        {isLoading ? <Loading /> :
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
        {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
        {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
      </div>
      <Footer />
    </div>
  )
}
