import React from 'react'
import { Header, Prices } from 'src/components'
import './MainPage.css'

export const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <div className="mainPage__blocks">
        <Prices />
      </div>
    </div>
  )
}
