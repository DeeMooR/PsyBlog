import React, { FC } from 'react'
import parse from 'html-react-parser';
import { IText } from './interfaces';
import './postBlocks.css'

export const Text:FC<{obj: IText}> = ({ obj }) => {
  return (
    <p className="text">{parse(obj.text)}</p>
  )
}
