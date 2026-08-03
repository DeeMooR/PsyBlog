import React, { useEffect, useState } from 'react'
import { QualificationChapter, SectionTemplate } from 'src/components'
import { certificates, certificates_slides, qualification } from 'src/config'
import { displayScroll, hiddenScroll } from 'src/helpers';
import cls from './Qualification.module.css'

import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import { ColumnsPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";

export const Qualification = () => {
  const [photoIndex, setPhotoIndex] = useState<number | undefined>(undefined);

  const handleClickPhoto = ({ index }: {index: number}) => {
    setPhotoIndex(index)
  }

  useEffect(() => {
    if (typeof photoIndex === 'number') hiddenScroll() 
    else displayScroll();
  }, [photoIndex])

  return (
    <SectionTemplate id='qualification' title='Образование' backgroundColor='beige' >
      <div className={cls.container}>
        <div className={cls.content}>
          {qualification.map(({title, items}) => (
            <QualificationChapter title={title} items={items} key={title} />
          ))}
        </div>
        <RowsPhotoAlbum photos={certificates} onClick={handleClickPhoto} targetRowHeight={170}  />
        <ColumnsPhotoAlbum photos={certificates} onClick={handleClickPhoto} columns={2} />
      </div>
      <Lightbox
        plugins={[Zoom]}
        index={photoIndex}
        open={typeof photoIndex === 'number'}
        close={() => setPhotoIndex(undefined)}
        slides={certificates_slides}
      />
    </SectionTemplate>
  )
}

