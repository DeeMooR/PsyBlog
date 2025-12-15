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
            <p className={cls.info__item}>Терапия проходит в формате регулярных индивидуальных онлайн-встреч.<br/>Мы встречаемся в Zoom из любого места, где вам удобно и безопасно говорить о себе.</p>
            <p className={cls.info__item}>Каждая сессия длится 45 минут.<br/>Стоимость одной сессии — 35 евро.<br/>Частота встреч, один или несколько раз в неделю, обсуждается индивидуально и подбирается в зависимости от вашей ситуации и внутреннего запроса.</p>
            <p className={cls.info__item}>Во время сессии мы работаем с вашими мыслями, чувствами и переживаниями. Важно не только то, о чём вы говорите, но и то, как вы это проживаете.</p>
            <p className={cls.info__item}>Работа строится на принципах конфиденциальности и профессиональной этики.<br/>Я соблюдаю этический кодекс ЕАРПП.<br/>Всё, что происходит на сессиях, остаётся в пределах терапевтического пространства.</p>
          </div>
        </div>
        <div className={cls.image}>
          <ConsultationImage image={consultationImage} />
        </div>
      </div>
    </SectionTemplate>
  )
}