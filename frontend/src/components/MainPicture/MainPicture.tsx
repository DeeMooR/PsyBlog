import React, { useEffect, useState } from 'react'
import cn from 'classnames';
import { mainImage, mainImageSmall } from 'src/assets'
import { MainImage } from 'src/styled'
import './MainPicture.scss'


export const MainPicture = () => {
  // const [imageSrc, setImageSrc] = useState(mainImageSmall);

  // useEffect(() => {
  //   const img = new Image();
  //   img.src = mainImage;
  //   img.onload = () => {
  //     setImageSrc(mainImage);
  //   }
  // }, [mainImage])

  // const mainImageStyle = cn({
  //   loadingImage: imageSrc === mainImageSmall,
  // });

  return (
    <section className='mainPicture' id='up'>
      <MainImage image={mainImage} />
      {/* <MainImage image={mainImage} className={mainImageStyle} /> */}
      {/* <blockquote className="mainPicture__quote quote">{parse(quotes[0])}</blockquote> */}
      <div className="mainPicture__info">
        <p className='mainPicture__title'>ПСИХОЛОГ ОНЛАЙН</p>
        <p className='mainPicture__name'>Разваляева Ольга</p>
      </div>
    </section>
  )
}
