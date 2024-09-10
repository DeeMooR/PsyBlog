import React, { useEffect } from 'react'
import { CardSmall, Footer, Header, Notification } from 'src/components'
import { allCards } from 'src/config'
import './AllPosts.css'
import { clearAllPostsMessages, getAdminSelector, getAllPostsSelector, useAppDispatch, useAppSelector } from 'src/store'
import { getShortPostsAction, getShortPostsAdminAction } from 'src/store/actions'

export const AllPosts = () => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(getAdminSelector);
  const { shortPosts, errorMessage } = useAppSelector(getAllPostsSelector);

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
        <div className="allPosts__list">
          {shortPosts.map(item => (
            <CardSmall obj={item} key={item.id} />
          ))}
        </div>
        {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
      </div>
      <Footer />
    </div>
  )
}
