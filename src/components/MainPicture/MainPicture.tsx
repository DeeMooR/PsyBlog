import React from 'react'
import { mainImage } from 'src/assets'
import { MainImage } from 'src/styled'
import './MainPicture.css'

export const MainPicture = () => {
  return (
    <section className='mainPicture'>
      <MainImage image={mainImage} />
      <blockquote className="mainPicture__quote">Helping to heal <span>the</span><br/>hurt that no one sees</blockquote>
    </section>
  )
}
