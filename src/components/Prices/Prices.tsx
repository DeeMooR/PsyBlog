import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { services } from './config'
import './Prices.css'

export const Prices = () => {
  return (
    <div className='prices'>
      <SectionTemplate title='Цены' backgroundColor='grey' withButton >
        <div className='content'>
          {services.map(item => (
            <PriceItem obj={item} />
          ))}
        </div>
      </SectionTemplate>
    </div>
  )
}