import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMainSelector, getShortPostsTopAction, useAppDispatch, useAppSelector } from 'src/store'
import { CardSmall, SectionTemplate } from 'src/components'
import { Loading } from 'src/UI'
import './Blog.scss'

export const Blog = () => {
  const dispatch = useAppDispatch();
  const { topPosts, isLoading } = useAppSelector(getMainSelector);

  useEffect(() => {
    dispatch(getShortPostsTopAction());
  }, [])

  return (
    <>
    {isLoading ? (
      <div className="blog__loading">
        <Loading />
      </div>
    ) : (
      !!topPosts.length &&
        <SectionTemplate id='blog' >
          <div className='blog'>
            <div className="blog__cards">
              {topPosts.map(item => (
                <CardSmall obj={item} key={item.id} />
              ))}
            </div>
            <Link to='/posts' className='button blog__button'>Все статьи</Link>
          </div>
        </SectionTemplate>
    )}
    </>
  )
}
