import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { scrollToSection } from 'src/helpers'
import './Footer.scss'

export const Footer = () => {
  const navigate = useNavigate();

  const scroll = (section: string) => {
    scrollToSection(section, navigate)
  }

  const openTelegram = () => {
    window.open('https://t.me/+34694440911', '_blank');
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/34694440911', '_blank');
  }

  return (
    <footer className='footer'>
      <div className="footer__navigation">
        <div className="footer__column">
          <a onClick={() => scroll('about')}>Обо мне</a>
          <a onClick={() => scroll('prices')}>Консультации</a>
          <a onClick={() => scroll('faq')} >Вопросы</a>
        </div>
        <div className='footer__icons'>
          <p className='icons__text'>Контакты для связи</p>
          <a href="https://mail.google.com/mail/?view=cm&to=orv7613@gmail.com" target="_blank" className="icons__email">orv7613@gmail.com</a>
          <div className="icons__block">
            <svg onClick={openTelegram} className='icons__item' width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 0C18.3711 0 12.0078 2.63555 7.32422 7.32227C2.63583 12.0109 0.0013416 18.3695 0 25C0 31.6277 2.63672 37.991 7.32422 42.6777C12.0078 47.3645 18.3711 50 25 50C31.6289 50 37.9922 47.3645 42.6758 42.6777C47.3633 37.991 50 31.6277 50 25C50 18.3723 47.3633 12.009 42.6758 7.32227C37.9922 2.63555 31.6289 0 25 0Z" fill="white"/>
              <path d="M11.3163 24.736C18.6053 21.561 23.4647 19.4677 25.8944 18.4563C32.8397 15.5684 34.2811 15.0668 35.2225 15.0498C35.4295 15.0465 35.8905 15.0977 36.1913 15.3408C36.4413 15.5459 36.5116 15.8233 36.5467 16.018C36.578 16.2125 36.6209 16.6559 36.5858 17.002C36.2108 20.9551 34.5819 30.5481 33.7538 34.9758C33.4061 36.8492 32.7147 37.4774 32.0467 37.5387C30.5936 37.6723 29.492 36.5793 28.0858 35.6578C25.8866 34.2153 24.6444 33.3176 22.5077 31.9102C20.0389 30.2836 21.6405 29.3895 23.0467 27.9285C23.4139 27.5461 29.8124 21.7278 29.9334 21.2C29.9491 21.134 29.9647 20.8879 29.8163 20.7582C29.6717 20.6282 29.4569 20.6727 29.3006 20.7078C29.078 20.7578 25.5663 23.0813 18.7538 27.6778C17.7577 28.3629 16.8553 28.6969 16.0428 28.6793C15.1522 28.6602 13.4334 28.1746 12.1561 27.7598C10.5936 27.2508 9.34751 26.9817 9.45688 26.1172C9.51157 25.6672 10.1327 25.2067 11.3163 24.736Z" fill="#EFC3A9"/>
            </svg>
            <svg onClick={openWhatsApp} className='icons__item' width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.07126 24.7008C1.07009 28.9017 2.17617 33.0037 4.27936 36.6192L0.870117 48.9723L13.6088 45.6576C17.1322 47.561 21.0798 48.5584 25.0914 48.5587H25.102C38.345 48.5587 49.1252 37.8643 49.1309 24.7196C49.1334 18.35 46.6362 12.3605 42.099 7.85427C37.5625 3.34845 31.5293 0.8657 25.101 0.862793C11.8563 0.862793 1.07692 11.5566 1.07145 24.7008" fill="white"/>
              <path d="M18.8838 14.3698C18.4178 13.3421 17.9275 13.3213 17.4844 13.3033C17.1216 13.2878 16.7068 13.289 16.2924 13.289C15.8776 13.289 15.2037 13.4438 14.634 14.0611C14.0638 14.6789 12.457 16.1719 12.457 19.2085C12.457 22.2452 14.6858 25.18 14.9965 25.5923C15.3076 26.0037 19.2991 32.4347 25.6208 34.9087C30.8747 36.9647 31.9439 36.5558 33.0841 36.4527C34.2246 36.35 36.764 34.9601 37.2821 33.5188C37.8006 32.0777 37.8006 30.8424 37.6452 30.5843C37.4897 30.3271 37.0749 30.1727 36.453 29.8642C35.831 29.5556 32.7731 28.0622 32.203 27.8562C31.6328 27.6504 31.2182 27.5477 30.8034 28.1657C30.3887 28.7828 29.1976 30.1727 28.8346 30.5843C28.472 30.9969 28.1089 31.0483 27.4871 30.7395C26.8648 30.4299 24.8618 29.7789 22.4854 27.6764C20.6364 26.0403 19.3882 24.02 19.0254 23.4019C18.6625 22.7849 18.9865 22.4504 19.2984 22.1428C19.5778 21.8663 19.9205 21.4221 20.2318 21.0618C20.5419 20.7014 20.6454 20.4442 20.8528 20.0326C21.0604 19.6205 20.9565 19.2601 20.8013 18.9514C20.6454 18.6426 19.4368 15.5901 18.8838 14.3698Z" fill="#EFC3A9"/>
            </svg>
          </div>
        </div>
        <div className='footer__column'>
          <a onClick={() => scroll('qualification')}>Квалификация</a>
          {/* <a onClick={() => scroll('blog')} >Блог</a> */}
          <a onClick={() => scroll('contacts')}>Контакты</a>
        </div>
      </div>
      <div className="footer__copyright">
        <div className='copyright__text'>© Ольга Разваляева, 2024 / <p className='copyright__docs'>Документация</p>
          {/* <Link to='/documentation' className='copyright__docs'>Документация</Link> */}
        </div>
      </div>
    </footer>
  )
}
