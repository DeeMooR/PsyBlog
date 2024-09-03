import React from 'react'
import { Link } from 'react-router-dom'
import { ExperienceSlider, SectionTemplate } from 'src/components'
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
          <p className="about__text">
            Я помогаю понимать свои эмоции, обрести уверенность и легче справляться с тревогами. Чтобы получить устойчивые изменения и не допустить появления этих же проблем в будущем — работаю и с их причинами. <br/><br/>
            Практикую с 2018 года в рамках психоаналитического подхода и имагинативной психотерапии, для контроля качества еженедельно хожу на супервизии. <br/><br/>
            Я преподаю психоанализ, провожу супервизии для специалистов, являюсь действительным членом Ассоциации имагинативной психодинамической психотерапии, придерживаюсь этического кодекса.
          </p>
          <Link to='/qualification' className='button about__button'>Квалификация</Link>
        </div>
      </div>
    </SectionTemplate>
  )
}

