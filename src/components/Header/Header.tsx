import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { displayScroll, hiddenScroll, scrollToSection } from 'src/helpers';
import { menuIcon } from 'src/assets';
import './Header.scss'

export const Header = () => {
  const navigate = useNavigate();
  const [clickMenu, setClickMenu] = useState(false);

  useEffect(() => {
    if (clickMenu) hiddenScroll()
    else displayScroll()
  }, [clickMenu]);

  const onClickLogo = () => {
    navigate('/');
    scrollToSection('up', -80);
  }

  return (
    <header className='header'>
      <div className="header__wrapper">
        <div className='header__navigation'>
          <a onClick={() => scrollToSection('about')}>Обо мне</a>
          <a onClick={() => scrollToSection('prices')}>Консультации</a>
          <a onClick={() => scrollToSection('faq')} >Вопросы</a>
        </div>
        <div className="header__logo" onClick={onClickLogo}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Психолог, Психоаналитик</p>
        </div>
        <div className='header__navigation'>
          <a onClick={() => scrollToSection('qualification')}>Квалификация</a>
          <a onClick={() => scrollToSection('blog')} >Блог</a>
          <a onClick={() => scrollToSection('contacts')}>Контакты</a>
        </div>
        <div className="header__menu">
          <img src={menuIcon} alt="menu" />
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
