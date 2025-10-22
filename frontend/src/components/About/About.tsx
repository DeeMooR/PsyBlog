import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionTemplate } from 'src/components'
import { scrollToSection } from 'src/helpers'
import { AboutImage } from 'src/styled'
import { aboutImage } from 'src/assets'
import './About.scss'

export const About = () => {
  const navigate = useNavigate();

  return (
    <SectionTemplate id='about' >
      <div className='about'>
        <div className="about__image">
          <AboutImage image={aboutImage} />
        </div>
        <div className="about__info">
          <div className="about__paragraphs">
            <p className="about__title">Я — клинический психолог.</p>
            <p className="about__title">Работаю в психоаналитическом подходе и провожу индивидуальные онлайн-консультации.</p>
            <p className="about__title">Помогаю тем, кто живёт за границей и сталкивается с тревогой, выгоранием, чувством утраты опоры или трудностями адаптации.</p>
          </div>
          <button onClick={() => scrollToSection('qualification', navigate)} className='about__button'>Образование и опыт</button>
        </div>
      </div>
    </SectionTemplate>
  )
}

