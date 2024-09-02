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
        <Person />
        <Experience />
        <Blog />
        <Contacts />
      </div>
      <Footer />
    </div>
  )
}
