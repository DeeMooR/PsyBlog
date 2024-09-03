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
        <div className='header__navigation'>
          <a href='#experience' onClick={() => scrollToSection('experience')}>Обо мне</a>
          <a href='#prices' onClick={() => scrollToSection('prices')}>Консультации</a>
          <a href='#faq' onClick={() => scrollToSection('faq')} >Вопросы</a>
        </div>
        <div className="header__logo" onClick={onClickLogo}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Психолог, Психоаналитик</p>
        </div>
        <div className='header__navigation'>
          <a href='#prices' onClick={() => scrollToSection('prices')}>Квалификация</a>
          <a href='#blog' onClick={() => scrollToSection('blog')} >Блог</a>
          <a href='#contacts' onClick={() => scrollToSection('contacts')}>Контакты</a>
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
