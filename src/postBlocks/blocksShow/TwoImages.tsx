import React, { FC } from 'react'
import { ITwoImages } from '../interfaces';
import './postBlocks.css'

export const TwoImages:FC<{obj: ITwoImages}> = ({ obj }) => {
  const { image1, image2 } = obj;
  return (
    <div className="twoImage">
      <img src={image1} />
      <img src={image2} />
    </div>
  )
}
