import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { services } from 'src/config'
import './Prices.css'

export const Prices = () => {
  return (
    <SectionTemplate title='Цены' backgroundColor='white' withButton >
      <div className='prices'>
        {services.map(item => (
          <PriceItem obj={item} />
        ))}
      </div>
    </SectionTemplate>
  )
}