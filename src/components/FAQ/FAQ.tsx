import React from 'react'
import { FAQItem, SectionTemplate } from 'src/components'
import { faqs } from 'src/config'
import './FAQ.css'

export const FAQ = () => {
  return (
    <SectionTemplate title='Вопросы' backgroundColor='white' id='faq' withButton >
      <div className='faq'>
        {faqs.map(item => (
          <FAQItem obj={item} key={item.id} />
        ))}
      </div>
    </SectionTemplate>
  )
}

