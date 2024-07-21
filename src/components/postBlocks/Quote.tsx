import React, { FC } from 'react'
import parse from 'html-react-parser';
import { IQuote } from './interfaces';
import './postBlocks.css'

export const Quote:FC<{obj: IQuote}> = ({ obj }) => {
  return (
    <blockquote className="quote">{parse(obj.quote)}</blockquote>
  )
}
