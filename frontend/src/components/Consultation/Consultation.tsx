import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PriceItem, SectionTemplate } from 'src/components'
import cls from './Consultation.module.css'
import { scrollToSection } from 'src/helpers'
import { consultationImage } from 'src/assets'
import { ConsultationImage } from 'src/styled'

export const Consultation = () => {
  const navigate = useNavigate();
  
  return (
    <SectionTemplate id='consultation' title='Как проходит терапия' titleColor='white' backgroundColor='green'>
      <div className={cls.content}>
        <div className={cls.info}>
          <div className={cls.info__list}>
            <p className={cls.info__item}>Терапия — это регулярные встречи, создающие устойчивое пространство для размышлений и понимания себя.<br/>Каждая встреча длится 50 минут, а частота определяется индивидуально.</p>
            <p className={cls.info__item}>Регулярность встреч помогает замечать внутренние закономерности и видеть изменения, которые происходят со временем.<br/>Постепенно становится понятнее, что вы чувствуете, как реагируете и чего хотите.</p>
            <p className={cls.info__item}>Сессии проходят онлайн, в Zoom.<br/>Первая встреча — диагностическая: мы обсуждаем ваш запрос, цели и договариваемся о формате работы.</p>
            <p className={cls.info__item}>Работа возможна из любой точки мира.<br/>Стоимость сессии — 50 €</p>
          </div>
          <button className='btnBeige' onClick={() => scrollToSection('contacts', navigate)}>Записаться на консультацию</button>
        </div>
        <div className={cls.image}>
          <ConsultationImage image={consultationImage} />
        </div>
      </div>
    </SectionTemplate>
  )
}