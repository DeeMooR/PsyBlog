import React from 'react'
import { SectionTemplate } from 'src/components'
import { certificates } from 'src/config'
import './Qualification.css'

export const Qualification = () => {
  return (
    <SectionTemplate id='qualification' title='Квалификация' backgroundColor='beige1' >
      <div className='qualification'>
        <div className="qualification__items">
          {certificates.map(value => (
            <div className="qualification__image" key={value}>
              <img src={value} alt='сертификат' />
            </div>
          ))}
        </div>
      </div>
    </SectionTemplate>
  )
}

