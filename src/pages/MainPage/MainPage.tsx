import React from 'react'
import { Blog, Experience, FAQ, Footer, Header, Prices, Contacts, Person, MainPicture, About, MainQuote } from 'src/components'

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
        <Blog />
        <Contacts />
        {/* <Person />
        <Experience /> */}
      </div>
      <Footer />
    </div>
  )
}
