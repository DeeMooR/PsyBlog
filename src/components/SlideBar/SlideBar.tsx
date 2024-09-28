import React, { FC, useEffect, useState } from 'react'
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

  const handleClick = (section: string, padding: number) => {
    scrollToSection(section, navigate, padding);
    setClickMenu(false);
  }

  return (
    <div className={`slideBar ${clickMenu && 'show'}`} >
      <div className="slideBar__header">
        <div className="slideBar__logo logo__block" onClick={() => handleClick('up', -80)}>
          <p className='logo__name'>Ольга Разваляева</p>
          <p className='logo__position'>Психолог, Психоаналитик</p>
        </div>
        <div className="slideBar__cross" onClick={() => setClickMenu(false)}>
          <img src={crossIcon} alt="cross" />
        </div>
      </div>
      <div className="slideBar__items">
        <a onClick={() => handleClick('about', -30)}>Обо мне</a>
        <a onClick={() => handleClick('prices', -40)}>Консультации</a>
        <a onClick={() => handleClick('faq', 0)} >Вопросы</a>
        <a onClick={() => handleClick('qualification', -50)}>Квалификация</a>
        <a onClick={() => handleClick('blog', -60)} >Блог</a>
        <a onClick={() => handleClick('contacts', -80)}>Контакты</a>
      </div>
    </div>
  )
}
