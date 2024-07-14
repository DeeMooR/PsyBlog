import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AllPosts, MainPage, Post } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/posts' element={<AllPosts />} />
      <Route path='/posts/:id' element={<Post />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
