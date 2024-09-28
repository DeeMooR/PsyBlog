import React, { useEffect, useState } from 'react'
import { QualificationChapter, SectionTemplate } from 'src/components'
import { certificates, certificates_slides, qualification } from 'src/config'
import { displayScroll, hiddenScroll } from 'src/helpers';
import './Qualification.scss'

import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { ColumnsPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";

export const Qualification = () => {
  const [index, setIndex] = useState<number>(-1);

  useEffect(() => {
    if (index >= 0) hiddenScroll() 
    else displayScroll();
  }, [index])

  return (
    <SectionTemplate id='qualification' title='Квалификация' backgroundColor='beige' >
      <div className='qualification'>
        <div className="qualification__info">
          {qualification.map(({title, items}) => (
            <QualificationChapter title={title} items={items} key={title} />
          ))}
        </div>
        <RowsPhotoAlbum photos={certificates} onClick={({ index }) => setIndex(index)} targetRowHeight={200}  />
        <ColumnsPhotoAlbum photos={certificates} columns={2} />
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

