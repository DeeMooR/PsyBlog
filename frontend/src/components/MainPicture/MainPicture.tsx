import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import cn from 'classnames';
import { mainImage, mainImageSmall } from 'src/assets'
import { MainImage } from 'src/styled'
import { quotes } from 'src/config'
import './MainPicture.scss'


export const MainPicture = () => {
  const [imageSrc, setImageSrc] = useState(mainImageSmall);

  useEffect(() => {
    const img = new Image();
    img.src = mainImage;
    img.onload = () => {
      setImageSrc(mainImage);
    }
  }, [mainImage])

  const mainImageStyle = cn({
    loadingImage: imageSrc === mainImageSmall,
  });

  return (
    <section className='mainPicture' id='up'>
      <MainImage image={imageSrc} className={mainImageStyle} />
      <blockquote className="mainPicture__quote quote">{parse(quotes[0])}</blockquote>
    </section>
  )
}
