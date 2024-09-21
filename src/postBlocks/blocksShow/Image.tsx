import React, { FC } from 'react'
import { IImage } from '../interfaces';
import './postBlocks.css'

export const Image:FC<{obj: IImage}> = ({ obj }) => {
  const { image, size, withBorder } = obj;
  return (
    <div className={`image ${size}`}>
      <img src={image} />
      {withBorder && <div className="imageBorder" />}
    </div>
  )
}
