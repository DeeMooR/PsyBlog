import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { displayScroll, hiddenScroll, scrollToSection } from 'src/helpers';
import { SlideBar } from 'src/components';
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
    scrollToSection('up', navigate, -80);
  }
  const scroll = (section: string) => {
    scrollToSection(section, navigate)
  }

  return (
    <header className='header'>
      <div className="header__wrapper">
        <div className='header__navigation'>
          <a onClick={() => scroll('about')}>Обо мне</a>
          <a onClick={() => scroll('prices')}>Консультации</a>
          <a onClick={() => scroll('faq')} >Вопросы</a>
        </div>
        <div className="header__logo logo__block" onClick={onClickLogo}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Психолог, Психоаналитик</p>
        </div>
        <div className='header__navigation'>
          <a onClick={() => scroll('qualification')}>Квалификация</a>
          <a onClick={() => scroll('blog')} >Блог</a>
          <a onClick={() => scroll('contacts')}>Контакты</a>
        </div>
        <div className="header__menu" onClick={() => setClickMenu(true)}>
          <img src={menuIcon} alt="menu" />
        </div>
      </div>
      <SlideBar clickMenu={clickMenu} setClickMenu={setClickMenu} />
    </header>
  )
}
