import React from 'react'
import { FAQItem, SectionTemplate } from 'src/components'
import { faqs_right, faqs_left } from 'src/config'
import './FAQ.scss'

export const FAQ = () => {
  return (
    <SectionTemplate id='faq' backgroundColor='green' title='Вопросы' titleColor='white' >
      <div className='faq'>
        <div className="faq__items">
          <div className="faq__column">
            {faqs_left.map(item => (
              <FAQItem obj={item} key={item.title} />
            ))}
          </div>
          <div className="faq__column">
            {faqs_right.map(item => (
              <FAQItem obj={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  )
}

