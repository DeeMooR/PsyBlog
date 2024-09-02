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
          <h3 className="about__title">Perhaps life looks like you always hoped it would. But inside, the picture is different.</h3>
          <p className="about__text">
            As a clinical psychologist and a working mum specialising in women's health, I understand first-hand the challenges that come with juggling career, family, and personal well-being. <br/><br/>
            My passion lies in supporting fellow working mothers like you, through a compassionate, holistic and evidence-based approach to mental health. <br/><br/>
            Whether you're navigating maternal mental health issues, seeking to improve work-life balance, or simply looking for a space to prioritise your own well-being, I am here to empower you on your journey, providing personalised support and practical strategies.
          </p>
          <Link to='/qualification' className='button about__button'>Квалификация</Link>
        </div>
      </div>
    </SectionTemplate>
  )
}

