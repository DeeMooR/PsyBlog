import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { services } from 'src/config'
import './Prices.scss'

export const Prices = () => {
  return (
    <SectionTemplate id='prices' backgroundColor='beige' >
      <div className='prices'>
        <div className="prices__items">
          {services.map(item => (
            <PriceItem obj={item} key={item.id} />
          ))}
        </div>
      </div>
    </SectionTemplate>
  )
}