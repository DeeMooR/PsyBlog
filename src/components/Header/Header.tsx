import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { InstagramIcon, LogoIcon, MenuIcon, TelegramIcon } from 'src/assets';
import './Header.css'

export const Header = () => {
  const navigate = useNavigate();
  const [clickMenu, setClickMenu] = useState(false);

  useEffect(() => {
    if (clickMenu) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [clickMenu]);

  const onClickLogo = () => {
    navigate('/');
  }

  return (
    <header className='header'>
      <div className="header__wrapper">
        <LogoIcon className='header__logo' onClick={onClickLogo} />
        <div className='header__navigation'>
          <a href='#'>Чем помогу</a>
          <a href='#'>Вопросы</a>
          <a href='#'>Блог</a>
          <a href='#'>Опыт</a>
          <a href='#'>Цены</a>
          <a href='#'>Записаться</a>
        </div>
        <div className='header__icons'>
          <TelegramIcon className='header__icon' />
          <InstagramIcon className='header__icon' />
        </div>
        {/* <MenuIcon className='header__menu' onClick={() => setClickMenu(true)} /> */}
      </div>
      {clickMenu &&
        <div>SlideBar</div>
        // <SlideBar clickMenu={clickMenu} setClickMenu={setClickMenu} />
      }
    </header>
  )
}
