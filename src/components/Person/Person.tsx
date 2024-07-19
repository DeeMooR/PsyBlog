import React from 'react'
import { person } from 'src/assets'
import './Person.css'
import { scrollToSection } from 'src/helpers'

export const Person = () => {
  return (
    <section className='person' id='person'>
      <div className="person__wrapper">
        <div className="person__info">
          <h1>Ольга Разваляева</h1>
          <p className='person__position'>Психолог / Психоаналитик</p>
          <a 
            className='person__button btnWhite' 
            href='#experience' 
            onClick={() => scrollToSection('experience')}
          >Обо мне</a>
        </div>
        <div className="person__image">
          <img src={person} />
          <div className="imageBorder" />
        </div>
      </div>
    </section>
  )
}
