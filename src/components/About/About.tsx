import React from 'react'
import { SectionTemplate } from 'src/components'
import { scrollToSection } from 'src/helpers'
import { AboutImage } from 'src/styled'
import { aboutImage } from 'src/assets'
import './About.css'

export const About = () => {
  return (
    <SectionTemplate id='about' >
      <div className='about'>
        <div className="about__image">
          <AboutImage image={aboutImage} />
        </div>
        <div className="about__info">
          <h3 className="about__title">Когда вы не осознаете происходящее внутри вас, снаружи это кажется судьбой.</h3>
          <p className="about__paragraphs">
            <p className='about__text'>Я помогаю понимать свои эмоции, обрести уверенность и легче справляться с тревогами. Чтобы получить устойчивые изменения и не допустить появления этих же проблем в будущем — работаю и с их причинами.</p>
            <p className='about__text'>Практикую с 2018 года в рамках психоаналитического подхода и имагинативной психотерапии, для контроля качества еженедельно хожу на супервизии.</p>
            <p className='about__text'>Я преподаю психоанализ, провожу супервизии для специалистов, являюсь действительным членом Ассоциации имагинативной психодинамической психотерапии, придерживаюсь этического кодекса.</p>
          </p>
          <button onClick={() => scrollToSection('qualification')} className='button about__button'>Квалификация</button>
        </div>
      </div>
    </SectionTemplate>
  )
}

