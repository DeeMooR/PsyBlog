import React, { FC } from 'react'
import parse from 'html-react-parser';
import { ITitleAndText } from './interfaces';
import './postBlocks.css'

export const TitleAndText:FC<{obj: ITitleAndText}> = ({ obj }) => {
  const { title, text } = obj;
  return (
    <div className="titleAndText">
      <p className="title">{parse(title)}</p>
      <p className="text">{parse(text)}</p>
    </div>
  )
}
