import React from 'react'
import { FAQItem, SectionTemplate } from 'src/components'
import { faqs_right, faqs_left } from 'src/config'
import './FAQ.scss'

export const FAQ = () => {
  return (
    <SectionTemplate id='faq' backgroundColor='green' title='Формат терапии' titleColor='white' >
      <div className='faq'>
        <div className="faq__items">
          <div className="faq__column">
            {faqs_left.map((item, index) => (
              <FAQItem obj={item} key={index} />
            ))}
          </div>
          <div className="faq__column">
            {faqs_right.map((item, index) => (
              <FAQItem obj={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}

