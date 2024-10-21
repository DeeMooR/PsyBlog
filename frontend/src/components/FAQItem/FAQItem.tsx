import React, { FC } from 'react'
import parse from 'html-react-parser';
import { IFAQ } from 'src/interfaces';
import './FAQItem.scss'

interface IFAQItem {
  obj: IFAQ
}

export const FAQItem:FC<IFAQItem> = ({ obj }) => {
  const { title, text } = obj;

  return (
    <div className='faqItem'>
      <h4>{title}</h4>
      <p className='faqItem__text'>{parse(text)}</p>
    </div>
  )
}
