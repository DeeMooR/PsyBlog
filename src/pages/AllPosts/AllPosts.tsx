import React, { useEffect } from 'react'
import { CardSmall, Footer, Header, Loading, Notification } from 'src/components'
import { getShortPostsAction, getShortPostsAdminAction, clearAllPostsMessages, getAdminSelector, getAllPostsSelector, useAppDispatch, useAppSelector } from 'src/store'
import './AllPosts.css'

export const AllPosts = () => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(getAdminSelector);
  const { shortPosts, isLoading, errorMessage, deletePostMessage } = useAppSelector(getAllPostsSelector);

  useEffect(() => {
    if (isAdmin) dispatch(getShortPostsAdminAction())
    else dispatch(getShortPostsAction());
  }, [isAdmin]);

  const clearMessages = () => dispatch(clearAllPostsMessages());

  return (
    <div className='allPosts'>
      <Header />
      <div className='allPosts__wrapper'>
        <h2 className='allPosts__title'>Все посты</h2>
        {isLoading ? <Loading /> :
          <div className="allPosts__list">
            {shortPosts.map(item => (
              <CardSmall obj={item} isAdmin={isAdmin} key={item.id} />
            ))}
          </div>
        }
        {deletePostMessage && <Notification type='success' message={deletePostMessage} clearMessage={clearMessages} />}
        {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
      </div>
      <Footer />
    </div>
  )
}
