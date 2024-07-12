import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { services } from 'src/config'
import './Prices.css'

export const Prices = () => {
  return (
    <SectionTemplate title='Цены' backgroundColor='white' id='prices' withButton >
      <div className='prices'>
        {services.map(item => (
          <PriceItem obj={item} key={item.id} />
        ))}
      </div>
    </SectionTemplate>
  )
}