import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { scrollToSection } from 'src/helpers'
import { services } from 'src/config'
import './Prices.css'

export const Prices = () => {
  return (
    <SectionTemplate id='prices' backgroundColor='beige1' >
      <div className='prices'>
        <div className="prices__items">
          {services.map(item => (
            <PriceItem obj={item} key={item.id} />
          ))}
        </div>
        <button onClick={() => scrollToSection('contacts', -80)} className='button btnDark prices__button'>Записаться</button>
      </div>
    </SectionTemplate>
  )
}