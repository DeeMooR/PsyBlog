import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { services } from './config'
import './Prices.css'

export const Prices = () => {
  return (
    <SectionTemplate title='Цены' backgroundColor='white' withButton >
      <section className='prices'>
        <div className='prices__content'>
          {services.map(item => (
            <PriceItem obj={item} />
          ))}
        </div>
      </section>
    </SectionTemplate>
  )
}