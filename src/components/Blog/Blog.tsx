import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CardSmall, SectionTemplate, Notification } from 'src/components'
import './Blog.css'
import { clearMainMessages, getMainSelector, getShortPostsTopAction, useAppDispatch, useAppSelector } from 'src/store'

export const Blog = () => {
  const dispatch = useAppDispatch();
  const { topPosts, errorMessage } = useAppSelector(getMainSelector);

  useEffect(() => {
    dispatch(getShortPostsTopAction());
  }, [])

  const clearMessages = () => dispatch(clearMainMessages());

  return (
    <>
    {!!topPosts.length &&
      <SectionTemplate id='blog' >
        <div className='blog'>
          <div className="blog__cards">
            {topPosts.map(item => (
              <CardSmall obj={item} key={item.id} />
            ))}
          </div>
          <Link to='/posts' className='button blog__button'>Все статьи</Link>
        </div>
        {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
      </SectionTemplate>
    }
    </>
  )
}
