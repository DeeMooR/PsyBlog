import React from 'react'
import { PriceItem, SectionTemplate } from 'src/components'
import { services } from 'src/config'
import './Prices.css'
import { Link } from 'react-router-dom'

export const Prices = () => {
  return (
    <SectionTemplate id='prices' backgroundColor='beige1' >
      <div className='prices'>
        <h3>Working together</h3>
        <div className="prices__items">
          {services.map(item => (
            <PriceItem obj={item} key={item.id} />
          ))}
        </div>
        <Link to='/contacts' className='button btnDark prices__button'>Записаться</Link>
      </div>
    </SectionTemplate>
  )
}