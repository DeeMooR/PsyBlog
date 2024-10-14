import React, { FC } from 'react'
import parse from 'html-react-parser';
import { formatTextLines } from 'src/helpers';
import { ITitleAndText } from '../interfaces';
import './postBlocks.scss'

export const TitleAndText:FC<{obj: ITitleAndText}> = ({ obj }) => {
  const { title, text } = obj;
  return (
    <div className="titleAndText">
      <p className="title">{title}</p>
      <p className="text">{parse(formatTextLines(text))}</p>
    </div>
  )
}
