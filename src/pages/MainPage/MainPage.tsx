import React from 'react'
import { Blog, Experience, FAQ, Footer, Header, Prices, Contacts, MainPicture, About, MainQuote, Qualification } from 'src/components'

export const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <div className="mainPage__blocks">
        <MainPicture />
        <MainQuote />
        <About />
        <Prices />
        <FAQ />
        <Qualification />
        <Blog />
        <Contacts />
        {/* <Experience /> */}
      </div>
      <Footer />
    </div>
  )
}
