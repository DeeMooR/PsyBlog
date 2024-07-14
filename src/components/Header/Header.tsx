import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logoIcon, telegramIcon, whatsappIcon } from 'src/assets';
import { scrollToSection } from 'src/helpers';
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
        <img className='header__logo' src={logoIcon} onClick={onClickLogo} />
        <div className='header__navigation'>
          <a href='#experience' onClick={() => scrollToSection('experience')}>Обо мне</a>
          <a href='#faq' onClick={() => scrollToSection('faq')} >Вопросы</a>
          <a href='#blog' onClick={() => scrollToSection('blog')} >Блог</a>
          <a href='#prices' onClick={() => scrollToSection('prices')}>Цены</a>
          <a href='#contacts' onClick={() => scrollToSection('contacts')}>Записаться</a>
        </div>
        <div className='header__icons'>
          <img className='header__icon' src={telegramIcon} />
          <img className='header__icon' src={whatsappIcon} />
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
