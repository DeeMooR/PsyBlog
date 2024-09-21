import React, { FC } from 'react'
import parse from 'html-react-parser';
import { IBlockquote } from '../interfaces';
import './postBlocks.css'

export const Blockquote:FC<{obj: IBlockquote}> = ({ obj }) => {
  return (
    <blockquote className="blockquote">{parse(obj.quote)}</blockquote>
  )
}
