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
            <p className={cls.info__item}>Я работаю в формате индивидуальных онлайн-встреч.</p>
            <p className={cls.info__item}>Консультации проходят в Zoom из любого места, где вам удобно и безопасно говорить о себе.</p>
            <p className={cls.info__item}>Длительность встречи: 45 минут<br/>Стоимость: 35 €<br/>Частота встреч: обсуждается индивидуально и зависит от вашей ситуации и запроса.</p>
            <p className={cls.info__item}>Консультация может быть разовой или стать началом более длительной работы, вы принимаете решение в своём темпе.</p>
            <p className={cls.info__item}>Я соблюдаю принципы конфиденциальности и профессиональной этики. Работаю в рамках этического кодекса ЕАРПП.</p>
          </div>
          <button className='btnBeige' onClick={() => scrollToSection('contacts', navigate)}>Записаться на консультацию</button>
        </div>
        <div className={cls.image} role="img" aria-label="Онлайн-консультация психолога в Zoom">
          <ConsultationImage image={consultationImage} />
        </div>
      </div>
    </SectionTemplate>
  )
}