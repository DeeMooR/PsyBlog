import React, { FC, ReactNode } from 'react'
import './SectionTemplate.css'

interface ISectionTemplate {
  id: string;
  children: ReactNode;
  title?: string;
  titleColor?: 'white' | 'black';
  backgroundColor?: 'beige1' | 'green';
}

export const SectionTemplate:FC<ISectionTemplate> = ({ id, children, title, titleColor, backgroundColor }) => {
  return (
    <section className={`sectionTemplate ${backgroundColor}`} id={id}>
      <div className="sectionTemplate__wrapper">
        {title && 
          <h3 className={`sectionTemplate__title title__${titleColor}`}>{title}</h3>
        }
        {children}
      </div>
    </section>
  )
}
