import React, { FC } from 'react'
import cn from 'classnames';
import parse from 'html-react-parser';
import './MainQuote.scss'

interface IMainQuote {
  quote: string,
  bottomPadding?: boolean,
}

export const MainQuote:FC<IMainQuote> = ({quote, bottomPadding}) => {
  const mainQuoteStyle = cn('mainQuote', {
    bottomPadding: bottomPadding,
  });

  return (
    <section className={mainQuoteStyle}>
      <blockquote className="mainQuote__quote quote">{parse(quote)}</blockquote>
    </section>
  )
}
