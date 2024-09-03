import React from 'react'
import { mainImage } from 'src/assets'
import { MainImage } from 'src/styled'
import './MainPicture.css'

export const MainPicture = () => {
  return (
    <section className='mainPicture' id='up'>
      <MainImage image={mainImage} />
      <blockquote className="mainPicture__quote">Психология — это выражение словами<br/>того, чего нельзя ими выразить.</blockquote>
    </section>
  )
}
