import React from 'react'
import { Link } from 'react-router-dom'
import { CardSmall, SectionTemplate } from 'src/components'
import { topCards } from 'src/config'
import './Blog.css'

export const Blog = () => {
  return (
    <SectionTemplate id='blog' >
      <div className='blog'>
        <div className="blog__cards">
          {topCards.map(item => (
            <CardSmall obj={item} key={item.id} />
          ))}
        </div>
        <Link to='/posts' className='blog__button btnBlack'>Все посты</Link>
      </div>
    </SectionTemplate>
  )
}
