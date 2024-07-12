import React, { FC, ReactNode } from 'react'
import './SectionTemplate.css'

interface ISectionTemplate {
  children: ReactNode;
  backgroundColor: 'white' | 'grey';
  id: string;
  title?: string;
  withButton?: boolean;
}

export const SectionTemplate:FC<ISectionTemplate> = ({ children, backgroundColor, id, title, withButton }) => {
  return (
    <section className={`sectionTemplate background__${backgroundColor}`} id={id}>
      <div className="sectionTemplate__wrapper">
        <h2>{title}</h2>
        {children}
        {withButton && 
          <a href='#form' className='sectionTemplate__button btnBlack'>Записаться на консультацию</a>
        }
      </div>
    </section>
  )
}
