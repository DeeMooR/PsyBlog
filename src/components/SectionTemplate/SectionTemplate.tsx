import React, { FC, ReactNode } from 'react'
import './SectionTemplate.css'

interface ISectionTemplate {
  children: ReactNode;
  title: string;
  backgroundColor: 'white' | 'grey';
  withButton?: boolean;
}

export const SectionTemplate:FC<ISectionTemplate> = ({ children, title, backgroundColor, withButton }) => {
  return (
    <section className={`sectionTemplate background__${backgroundColor}`}>
      <div className="sectionTemplate__wrapper">
        <h2>{title}</h2>
        {children}
        {withButton && 
          <a href='#form' className='buttonToForm'>Записаться на консультацию</a>
        }
      </div>
    </section>
  )
}
