import React, { useEffect, useState } from 'react'
import { SectionTemplate } from 'src/components'
import { certificates } from 'src/config'
import './Qualification.css'

import Lightbox from "yet-another-react-lightbox";
import { Counter, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

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
        <div className="qualification__items">
          {certificates.map((obj, index) => (
            <div className="qualification__image" key={index} onClick={() => setIndex(index)}>
              <img src={obj.src} alt='сертификат' />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        plugins={[Counter, Zoom]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={certificates}
      />
    </SectionTemplate>
  )
}

