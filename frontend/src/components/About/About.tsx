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
            <p className={cls.info__item}>Я — клинический психолог.</p>
            <p className={cls.info__item}>Работаю в психоаналитическом подходе и провожу индивидуальные онлайн-консультации.</p>
            <p className={cls.info__item}>Помогаю тем, кто живёт за границей и сталкивается с тревогой, выгоранием, чувством утраты опоры или трудностями адаптации.</p>
          </div>
          <button onClick={() => scrollToSection('qualification', navigate)}>Образование и опыт</button>
        </div>
      </div>
    </SectionTemplate>
  )
}

