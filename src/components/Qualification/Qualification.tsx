import React, { useEffect, useState } from 'react'
import { SectionTemplate } from 'src/components'
import { certificates, certificates_slides } from 'src/config'
import './Qualification.css'

import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export const Qualification = () => {
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    const header = document.querySelector('header');
    if (index >= 0) {
      document.body.style.overflowY = 'hidden';
      document.body.style.padding = '0 17px 0 0';
      if (header) header.style.padding = '0 17px 0 0';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.padding = '0';
      if (header) header.style.padding = '0';
    }
  }, [index])

  return (
    <SectionTemplate id='qualification' title='Квалификация' backgroundColor='beige1' >
      <div className='qualification'>
        <RowsPhotoAlbum photos={certificates} onClick={({ index }) => setIndex(index)} targetRowHeight={200}  />
        {/* <div className="qualification__items">
          {certificates.map((obj, index) => (
            <div className="qualification__image" key={index} onClick={() => setIndex(index)}>
              <img src={obj.src} alt='сертификат' />
            </div>
          ))}
        </div> */}
      </div>
      <Lightbox
        plugins={[Zoom]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={certificates_slides}
      />
    </SectionTemplate>
  )
}

