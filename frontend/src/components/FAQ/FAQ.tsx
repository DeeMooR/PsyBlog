import React from 'react'
import { FAQItem, SectionTemplate } from 'src/components'
import { faqs_right, faqs_left } from 'src/config'
import cls from './FAQ.module.css'

export const FAQ = () => {
  return (
    <SectionTemplate id='faq' title='Формат консультаций' titleColor='white' backgroundColor='green' >
      <div className={cls.content}>
        <div className={cls.column}>
          {faqs_left.map((item, i) => (
            <FAQItem obj={item} key={i} />
          ))}
        </div>
        <div className={cls.column}>
          {faqs_right.map((item, i) => (
            <FAQItem obj={item} key={i} />
          ))}
        </div>
      </div>
    </SectionTemplate>
  )
}

