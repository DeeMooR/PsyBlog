import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction, useAppDispatch } from 'src/store';
import { scrollToSection } from 'src/helpers';
import cls from './HeaderAdmin.module.css'

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
    <header className={cls.header}>
      <div className={cls.header__wrapper}>
        <div className={cls.navigation}>
          <a onClick={clickHome}>Главная</a>
          <Link to='/posts'>Статьи</Link>
          <Link to='/users'>Заявки</Link>
        </div>
        <div className={`${cls.logo} logo__block`} onClick={clickHome}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Клинический психолог</p>
        </div>
        <div className={cls.right}>
          <p className={cls.right__text}>Админ-панель</p>
          <button type='button' className={`${cls.right__button} smallBtn`} onClick={clickExit}>Выйти</button>
        </div>
      </div>
    </header>
  )
}
