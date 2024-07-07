import React, { FC, useEffect, useRef, useState } from 'react'
import parse from 'html-react-parser';
import './FAQItem.css'
import { IFAQ } from 'src/interfaces';
import { PlusIcon } from 'src/assets';

interface IFAQItem {
  obj: IFAQ
}

export const FAQItem:FC<IFAQItem> = ({ obj }) => {
  const { title, text } = obj;
  const [textHeight, setTextHeight] = useState(0);
  const [isShowText, setShowText] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onClickTitle = () => {
    setShowText(!isShowText);
  }

  // подсчёт высоты скрытого блока
  useEffect(() => {
    if (ref.current) {
      const countBr = text.split('<br /><br />').length - 1;
      const height = ref.current?.clientHeight + 40 + countBr*16*1.2;
      setTextHeight(height || 0);
    }
  }, []);

  // изменение height, чтобы сработал transition
  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = isShowText ? (textHeight + 'px') : '0px';
    }
  }, [isShowText]);

  return (
    <div className={`faqItem ${isShowText ? 'showText' : ''}`}>
      <div className="faqItem__openly" onClick={onClickTitle}>
        <h5>{title}</h5>
        <PlusIcon className='faqItem__icon' />
      </div>
      <p className='faqItem__hidden' ref={ref}>{parse(text)}</p>
    </div>
  )
}
