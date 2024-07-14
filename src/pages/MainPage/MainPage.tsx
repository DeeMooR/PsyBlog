import React from 'react'
import { Blog, Experience, FAQ, Footer, Header, Prices, Contacts } from 'src/components'

export const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <div className="mainPage__blocks">
        <Experience />
        <FAQ />
        <Blog />
        <Prices />
        <Contacts />
      </div>
      <Footer />
    </div>
  )
}
