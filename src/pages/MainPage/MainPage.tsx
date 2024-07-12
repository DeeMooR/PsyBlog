import React from 'react'
import { Blog, Experience, FAQ, Header, Prices } from 'src/components'
import './MainPage.css'
import { Contacts } from 'src/components/Contacts/Contacts'

export const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <div className="mainPage__blocks">
        <FAQ />
        <Blog />
        <Experience />
        <Prices />
        <Contacts />
      </div>
    </div>
  )
}
