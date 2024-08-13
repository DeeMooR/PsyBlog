import React from 'react'
import { Header, NewPostRequired } from 'src/components'
import './NewPost.css'

export const NewPost = () => {
  return (
    <div className='newPost'>
      <Header />
      <div className='newPost__wrapper'>
        <h2 className='newPost__title'>Создание поста</h2>
        <NewPostRequired />
      </div>
    </div>
  )
}
