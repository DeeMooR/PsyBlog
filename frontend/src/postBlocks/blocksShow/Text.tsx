import React, { FC } from 'react'
import parse from 'html-react-parser';
import { formatTextLines } from 'src/helpers';
import { IText } from '../interfaces';
import './postBlocks.scss'

export const Text:FC<{obj: IText}> = ({ obj }) => {
  return (
    <p className="text">{parse(formatTextLines(obj.text))}</p>
  )
}
