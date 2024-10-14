import React, { FC } from 'react'
import { ITitle } from '../interfaces';
import './postBlocks.scss'

export const Title:FC<{obj: ITitle}> = ({ obj }) => {
  return (
    <p className="title">{obj.title}</p>
  )
}
