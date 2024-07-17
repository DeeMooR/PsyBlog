import React, { FC, ReactNode } from 'react'
import { scrollToSection } from 'src/helpers';
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
          <a 
            className='sectionTemplate__button btnBlack' 
            href='#contacts' 
            onClick={() => scrollToSection('contacts')}
          >Записаться на консультацию</a>
        }
      </div>
    </section>
  )
}
