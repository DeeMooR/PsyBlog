import React from 'react'
import { Link } from 'react-router-dom'
import { telegramIcon, whatsappIcon } from 'src/assets'
import { scrollToSection } from 'src/helpers'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
        <div className='footer__navigation'>
          <a href='#person' onClick={() => scrollToSection('person')}>Главная</a>
          <a href='#experience' onClick={() => scrollToSection('experience')}>Обо мне</a>
          <a href='#faq' onClick={() => scrollToSection('faq')} >Вопросы</a>
          <Link to='/posts'>Все посты</Link>
          <a href='#blog' onClick={() => scrollToSection('blog')} >Блог</a>
          <a href='#prices' onClick={() => scrollToSection('prices')}>Цены</a>
          <a href='#contacts' onClick={() => scrollToSection('contacts')}>Записаться</a>
          <Link to='/documentation'>Документация</Link>
        </div>
        <div className='footer__text'>
          <p>Ольга Разваляева</p>
          <p>2024 г.</p>
        </div>
      </div>
    </footer>
  )
}
