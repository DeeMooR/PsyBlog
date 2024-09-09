import React, { FC } from 'react'
import parse from 'html-react-parser';
import './MainQuote.css'

interface IMainQuote {
  quote: string,
}

export const MainQuote:FC<IMainQuote> = ({quote}) => {
  return (
    <section className="mainQuote">
      <blockquote className="mainQuote__quote quote">{parse(quote)}</blockquote>
    </section>
  )
}
