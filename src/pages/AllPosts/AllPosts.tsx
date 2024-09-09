import React from 'react'
import { CardSmall, Footer, Header } from 'src/components'
import { allCards } from 'src/config'
import './AllPosts.css'

export const AllPosts = () => {
  return (
    <div className='allPosts'>
      <Header />
      <div className='allPosts__wrapper'>
        <h2 className='allPosts__title'>Все посты</h2>
        <div className="allPosts__list">
          {allCards.map(item => (
            <CardSmall obj={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
