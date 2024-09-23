import React from 'react'
import { clearMainMessages, getAdminSelector, getMainSelector, useAppDispatch, useAppSelector } from 'src/store';
import { Blog, FAQ, Footer, Header, Prices, Contacts, MainPicture, About, MainQuote, Qualification, HeaderAdmin } from 'src/components'
import { Notification } from 'src/UI'
import { quotes } from 'src/config'

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { errorMessage, successMessage } = useAppSelector(getMainSelector);
  const { isAdmin } = useAppSelector(getAdminSelector);

  const clearMessages = () => dispatch(clearMainMessages());
  
  return (
    <div className='mainPage'>
      {isAdmin ? <HeaderAdmin /> : <Header />}
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
      </div>
      <Footer />
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} displayTime={5000} />}
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} displayTime={5000} />}
    </div>
  )
}
