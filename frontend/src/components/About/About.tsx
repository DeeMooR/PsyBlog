import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionTemplate } from 'src/components'
import { scrollToSection } from 'src/helpers'
import { AboutImage } from 'src/styled'
import { aboutImage } from 'src/assets'
import cls from './About.module.css'

export const About = () => {
  const navigate = useNavigate();

  return (
    <SectionTemplate id='about' >
      <h2 className={cls.visuallyHidden}>Обо мне</h2>
      <div className={cls.content}>
        <div className={cls.image} role="img" aria-label="Ольга Разваляева, психолог">
          <AboutImage image={aboutImage} />
        </div>
        <div className={cls.info}>
          <div className={cls.info__list}>
            <p className={cls.info__item}>Я психолог.<br/>Провожу индивидуальные онлайн-консультации в психоаналитическом методе.</p>
            <p className={cls.info__item}>Вы можете обратиться ко мне, если есть ощущение тревоги, внутренней растерянности, неуверенности в себе или если привычные способы справляться с трудностями перестали работать. Это часто происходит при смене работы или профессии, проблемах в отношениях, при переезде или эмиграции.</p>
            <p className={cls.info__item}>В таких состояниях важно иметь пространство, где можно спокойно говорить о себе, своих переживаниях и сомнениях, без давления и необходимости быстро что-то решать.</p>
            <p className={cls.info__item}>В работе я не даю советов и не предлагаю готовых решений.<br/>Мы вместе исследуем ваш внутренний опыт, чтобы лучше понять происходящее и найти опоры, которые подходят именно вам.</p>
            <p className={cls.info__item}>Я работаю в психоаналитическом методе, прохожу регулярную супервизию и личную психотерапию.</p>
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}

