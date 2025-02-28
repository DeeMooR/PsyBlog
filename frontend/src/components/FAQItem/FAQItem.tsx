import React, { FC } from 'react'
import parse from 'html-react-parser';
import { IFAQ } from 'src/interfaces';
import './FAQItem.scss'

interface IFAQItem {
  obj: IFAQ
}

export const FAQItem:FC<IFAQItem> = ({ obj }) => {
  const { title, texts } = obj;

  return (
    <div className='faqItem'>
      <h4>{title}</h4>
      <p className='faqItem__texts'>
        {texts.map(text => (
          <p className='faqItem__text'>{text}</p>
        ))
        }
      </p>
    </div>
  )
}
