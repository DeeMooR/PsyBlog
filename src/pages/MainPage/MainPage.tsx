import React from 'react'
import { Blog, Experience, FAQ, Footer, Header, Prices, Contacts, MainPicture, About, MainQuote, Qualification } from 'src/components'
import { quotes } from 'src/config'

export const MainPage = () => {
  return (
    <div className='mainPage'>
      <Header />
      <div className="mainPage__blocks">
        <MainPicture />
        <MainQuote quote={quotes[1]} />
        <About />
        <Prices />
        <FAQ />
        <Qualification />
        <MainQuote quote={quotes[2]} />
        <Blog />
        <Contacts />
        {/* <Experience /> */}
      </div>
      <Footer />
    </div>
  )
}
