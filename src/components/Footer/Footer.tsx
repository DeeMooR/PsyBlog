import React from 'react'
import { Link } from 'react-router-dom'
import { telegramWhiteIcon, whatsappWhiteIcon } from 'src/assets'
import { scrollToSection } from 'src/helpers'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__navigation">
        <div className="footer__column">
          <a href='#person' onClick={() => scrollToSection('person')}>Обо мне</a>
          <a href='#experience' onClick={() => scrollToSection('experience')}>Консультации</a>
          <a href='#faq' onClick={() => scrollToSection('faq')} >Вопросы</a>
        </div>
        <div className='footer__icons'>
          <p className='icons__text'>Контакты для связи</p>
          <div className="icons__block">
            <img className='icons__item' src={telegramWhiteIcon} />
            <img className='icons__item' src={whatsappWhiteIcon} />
          </div>
        </div>
        <div className='footer__column'>
          <a href='#prices' onClick={() => scrollToSection('prices')}>Квалификация</a>
          <a href='#blog' onClick={() => scrollToSection('blog')} >Блог</a>
          <a href='#contacts' onClick={() => scrollToSection('contacts')}>Контакты</a>
        </div>
      </div>
      <div className="footer__copyright">
        <p className='copyright__text'>© Ольга Разваляева, 2024 / <Link to='/documentation'>Документация</Link></p>
      </div>
    </footer>
  )
}
