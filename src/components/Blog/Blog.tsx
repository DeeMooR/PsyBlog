import React from 'react'
import { Card, SectionTemplate } from 'src/components'
import { topCards } from 'src/config'
import './Blog.css'

export const Blog = () => {
  return (
    <SectionTemplate title='Блог' backgroundColor='white' id='blog' >
      <div className='blog'>
        <div className="blog__cards">
          {topCards.map(item => (
            <Card obj={item} key={item.id} />
          ))}
        </div>
        <a href='#form' className='blog__button btnBlack'>Все посты</a>
      </div>
    </SectionTemplate>
  )
}
