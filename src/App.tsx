import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AllPosts, MainPage, Post, NewPost, AuthPage, UsersPage } from './pages'
import { checkTokenAction, clearAdminMessages, getAdminSelector, setupInterceptors, useAppDispatch, useAppSelector } from './store';
import { Notification } from 'src/UI';

const App = () => {
  const dispatch = useAppDispatch();
  const { isAdmin, successMessage, errorMessage } = useAppSelector(getAdminSelector);

  useEffect(() => {
    setupInterceptors(dispatch);
    const token = localStorage.getItem('accessToken');
    if (token) dispatch(checkTokenAction(token))
  }, [])

  const clearMessages = () => dispatch(clearAdminMessages());

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/posts' element={<AllPosts />} />
      <Route path='/posts/:id' element={<Post />} />
      <Route path='/auth' element={<AuthPage />} />
      {isAdmin &&
        <>
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/new-post/:id' element={<NewPost />} />
        <Route path='/users' element={<UsersPage />} />
        </>
      }
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
    {successMessage && <Notification type='success' message={successMessage} clearMessage={clearMessages} />}
    {errorMessage && <Notification type='error' message={errorMessage} clearMessage={clearMessages} />}
    </>
  );
}

export default App;
