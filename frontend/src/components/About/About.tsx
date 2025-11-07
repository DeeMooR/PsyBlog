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
      <div className={cls.content}>
        <div className={cls.image}>
          <AboutImage image={aboutImage} />
        </div>
        <div className={cls.info}>
          <div className={cls.info__list}>
            <p className={cls.info__item}>Я — клинический психолог.<br/>Работаю в психоаналитическом подходе и провожу индивидуальные онлайн-консультации.</p>
            <p className={cls.info__item}>Мне близки темы эмиграции, адаптации, поиска идентичности и утраты опоры. Часто ко мне приходят, когда тревога, усталость или внутренние противоречия становятся слишком заметными.</p>
            <p className={cls.info__item}>В терапии я не даю советов и не предлагаю готовых решений.<br/>Мы вместе создаём пространство, где вы сможете понять себя и почувствовать большую ясность и найти опору.</p>
          </div>
          <button onClick={() => scrollToSection('qualification', navigate)}>Образование и опыт</button>
        </div>
      </div>
    </SectionTemplate>
  )
}

