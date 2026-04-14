import React from 'react'
import { clearMainMessages, getAdminSelector, getMainSelector, useAppDispatch, useAppSelector } from 'src/store';
import { Blog, FAQ, Footer, Header, Prices, Contacts, MainBlock, About, Qualification, HeaderAdmin, Consultation } from 'src/components'
import { Notification } from 'src/UI'

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(getAdminSelector);
  const { topPosts, errorMessage, successMessage } = useAppSelector(getMainSelector);

  const clearMessages = () => dispatch(clearMainMessages());
  
  return (
    <div>
      {isAdmin ? <HeaderAdmin /> : <Header />}
      <div>
        <MainBlock />
        <About />
        <Consultation />
        <Qualification />
        {topPosts && <Blog />}
        <Contacts />
      </div>
      <Footer />
      {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} displayTime={5000} />}
      {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} displayTime={5000} />}
    </div>
  )
}
