import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AllPosts, MainPage, Post, NewPost, AuthPage } from './pages'
import { setAdminIsAdmin, useAppDispatch } from './store';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken === 'adminToken') dispatch(setAdminIsAdmin(true))
  }, [])

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/posts' element={<AllPosts />} />
      <Route path='/posts/:id' element={<Post />} />
      <Route path='/new-post' element={<NewPost />} />
      <Route path='/new-post/:id' element={<NewPost />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
