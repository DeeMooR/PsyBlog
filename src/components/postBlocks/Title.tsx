import React, { FC } from 'react'
import parse from 'html-react-parser';
import { ITitle } from './interfaces';
import './postBlocks.css'

export const Title:FC<{obj: ITitle}> = ({ obj }) => {
  return (
    <p className="title">{parse(obj.title)}</p>
  )
}
