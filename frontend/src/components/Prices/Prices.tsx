import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { services } from 'src/config'
import cls from './Prices.module.css'

export const Prices = () => {
  return (
    <SectionTemplate id='prices' backgroundColor='beige'>
      <div className={cls.content}>
        {services.map(item => (
          <PriceItem obj={item} key={item.id} />
        ))}
      </div>
    </SectionTemplate>
  )
}