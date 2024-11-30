import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction, useAppDispatch } from 'src/store';
import { scrollToSection } from 'src/helpers';
import './HeaderAdmin.scss'

export const HeaderAdmin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clickHome = () => {
    scrollToSection('up', navigate, -80);
  }

  const clickExit = () => {
    const token = localStorage.getItem('accessToken');
    dispatch(logoutAction(token));
    navigate('/');
  }

  return (
    <header className='headerAdmin'>
      <div className="headerAdmin__wrapper">
        <div className='headerAdmin__navigation'>
          <a onClick={clickHome}>Главная</a>
          <Link to='/posts'>Статьи</Link>
          <Link to='/users'>Заявки</Link>
        </div>
        <div className="headerAdmin__logo logo__block" onClick={clickHome}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Психолог</p>
        </div>
        <div className='headerAdmin__right'>
          <p className='headerAdmin__adminText'>Админ-панель</p>
          <button type='button' className='headerAdmin__exit smallBtn' onClick={clickExit}>Выйти</button>
        </div>
      </div>
    </header>
  )
}
