import React from 'react'
import { FAQItem, SectionTemplate } from 'src/components'
import { faqs } from 'src/config'
import './FAQ.css'

export const FAQ = () => {
  return (
    <SectionTemplate id='faq' backgroundColor='green' title='Вопросы' titleColor='white' >
      <div className='faq'>
        <div className="faq__items">
          <div className="faq__column">
            {faqs.slice(0,2).map(item => (
              <FAQItem obj={item} key={item.id} />
            ))}
          </div>
          <div className="faq__column">
            {faqs.slice(2,4).map(item => (
              <FAQItem obj={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}
