import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from 'src/helpers';
import { crossIcon } from 'src/assets';
import "./SlideBar.scss"

interface ISlideBar {
  clickMenu: boolean,
  setClickMenu: (value: boolean) => void,
}

export const SlideBar:FC<ISlideBar> = ({ clickMenu, setClickMenu }) => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    scrollToSection('up', navigate, -80);
    setClickMenu(false);
  }
  const scroll = (section: string) => {
    scrollToSection(section, navigate, -40);
    setClickMenu(false);
  }

  return (
    <div className={`slideBar ${clickMenu && 'show'}`} >
      <div className="slideBar__header">
        <div className="slideBar__logo logo__block" onClick={onClickLogo}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Психолог</p>
        </div>
        <div className="slideBar__cross" onClick={() => setClickMenu(false)}>
          <img src={crossIcon} alt="cross" />
        </div>
      </div>
      <div className="slideBar__items">
        <a onClick={() => scroll('about')}>Обо мне</a>
        <a onClick={() => scroll('consultation')}>Формат терапии</a>
        <a onClick={() => scroll('qualification')}>Образование</a>
        {/* <a onClick={() => scroll('blog')} >Статьи</a> */}
        <a onClick={() => scroll('contacts')}>Контакты</a>
      </div>
    </div>
  )
}
