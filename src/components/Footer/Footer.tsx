import React from 'react'
import { telegramIcon, whatsappIcon } from 'src/assets'
import { scrollToSection } from 'src/helpers'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__wrapper">
        <div className='footer__navigation'>
          <a href='#' >Чем помогу</a>
          <a href='#faq' onClick={() => scrollToSection('faq')} >Вопросы</a>
          <a href='#blog' onClick={() => scrollToSection('blog')} >Блог</a>
          <a href='#experience' onClick={() => scrollToSection('experience')}>Опыт</a>
          <a href='#prices' onClick={() => scrollToSection('prices')}>Цены</a>
          <a href='#contacts' onClick={() => scrollToSection('contacts')}>Записаться</a>
        </div>
        <div className='footer__icons'>
          <img className='footer__icon' src={telegramIcon} />
          <img className='footer__icon' src={whatsappIcon} />
        </div>
      </div>
    </footer>
  )
}
