import React from 'react'
import parse from 'html-react-parser';
import { mainImage } from 'src/assets'
import { MainImage } from 'src/styled'
import { quotes } from 'src/config'
import './MainPicture.css'


export const MainPicture = () => {
  return (
    <section className='mainPicture' id='up'>
      <MainImage image={mainImage} />
      <blockquote className="mainPicture__quote quote">{parse(quotes[0])}</blockquote>
    </section>
  )
}
