import React, { FC } from 'react'
import parse from 'html-react-parser';
import { formatTextLines } from 'src/helpers';
import { IBlockquote } from '../interfaces';
import './postBlocks.scss'

export const Blockquote:FC<{obj: IBlockquote}> = ({ obj }) => {
  return (
    <blockquote className="blockquote">{parse(formatTextLines(obj.quote))}</blockquote>
  )
}
