import React from 'react'
import { clearMainMessages, getAdminSelector, getMainSelector, useAppDispatch, useAppSelector } from 'src/store';
import { Blog, FAQ, Footer, Header, Prices, Contacts, MainPicture, About, MainQuote, Qualification, HeaderAdmin } from 'src/components'
import { Notification } from 'src/UI'
import { quotes } from 'src/config'

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(getAdminSelector);
  const { topPosts, errorMessage, successMessage } = useAppSelector(getMainSelector);

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
        <MainQuote quote={quotes[2]} bottomPadding />
        {/* <MainQuote quote={quotes[2]} bottomPadding={!topPosts.length} /> */}
        {/* <Blog /> */}
        <Contacts />
      </div>
      <Footer />
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} displayTime={5000} />}
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} displayTime={5000} />}
    </div>
  )
}
