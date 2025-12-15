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
            <p className={cls.info__item}>Я психолог.<br/>Провожу индивидуальные онлайн-консультации в психоаналитическом методе.</p>
            <p className={cls.info__item}>Ко мне можно обратиться, если есть ощущение тревоги, стыда, неуверенности в себе или внутренней растерянности. Это бывает, когда происходит переход от одного жизненного этапа к другому, например, при смене работы или профессии, в отношениях, при переезде или эмиграции.<br/>В этом состоянии "между" старые освоенные способы справляться с трудностями, понимать себя и просто жить уже не подходят, а новые ещё не выработались. При этом вы можете ощущать усталость, сомнения, напряжение в отношениях, чувство потери себя.</p>
            <p className={cls.info__item}>В терапии я не даю советов и не предлагаю готовых решений. Мы вместе создаём пространство для  исследования ваших чувств, мыслей и переживаний.</p>
            <p className={cls.info__item}>Я работаю в рамках психоаналитического метода под супервизией и прохожу личную психотерапию.</p>
          </div>
          <button onClick={() => scrollToSection('contacts', navigate)}>Записаться на консультацию</button>
        </div>
      </div>
    </SectionTemplate>
  )
}

