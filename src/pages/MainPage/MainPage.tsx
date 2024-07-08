import React from 'react'
import { Experience, FAQ, Header, Prices } from 'src/components'
import './MainPage.css'
import { Contacts } from 'src/components/Contacts/Contacts'

export const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <div className="mainPage__blocks">
        <Experience />
        <FAQ />
        <Prices />
        <Contacts />
      </div>
    </div>
  )
}
