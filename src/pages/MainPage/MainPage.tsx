import React from 'react'
import { Blog, Experience, FAQ, Footer, Header, Prices, Contacts, MainPicture, About, MainQuote, Qualification, Notification } from 'src/components'
import { quotes } from 'src/config'
import { clearMainMessages, getMainSelector, useAppDispatch, useAppSelector } from 'src/store';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { errorMessage, successMessage } = useAppSelector(getMainSelector);

  const clearMessages = () => dispatch(clearMainMessages());
  
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
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} displayTime={5000} />}
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} displayTime={5000} />}
    </div>
  )
}
