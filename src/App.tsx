import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AllPosts, MainPage, Post, NewPost, AuthPage, UsersPage } from './pages'
import { getAdminSelector, setAdminIsAdmin, useAppDispatch, useAppSelector } from './store';

const App = () => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector(getAdminSelector);

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken === 'adminToken') dispatch(setAdminIsAdmin(true))
  }, [])

  return (
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
  );
}

export default App;
