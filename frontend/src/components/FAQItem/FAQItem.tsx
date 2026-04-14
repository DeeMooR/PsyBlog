import React, { FC } from 'react'
import { IFAQ } from 'src/interfaces';
import cls from './FAQItem.module.css'

interface IFAQItem {
  obj: IFAQ
}

export const FAQItem:FC<IFAQItem> = ({ obj }) => {
  const { title, texts } = obj;

  return (
    <div className={cls.container}>
      <h4>{title}</h4>
      <p className={cls.list}>
        {texts.map(text => (
          <p className={cls.item}>{text}</p>
        ))}
      </p>
    </div>
  )
}
