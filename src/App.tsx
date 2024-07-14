import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage, Post } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/blog/:id' element={<Post />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
