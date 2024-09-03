import React from 'react'
import { mainImage } from 'src/assets'
import { MainImage } from 'src/styled'
import './MainPicture.css'

export const MainPicture = () => {
  return (
    <section className='mainPicture'>
      <MainImage image={mainImage} />
      <blockquote className="mainPicture__quote">Психология — это выражение <span>словами</span><br/>того, чего нельзя ими выразить.</blockquote>
    </section>
  )
}
