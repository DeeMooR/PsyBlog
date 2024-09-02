import React, { FC, ReactNode } from 'react'
import './SectionTemplate.css'

interface ISectionTemplate {
  id: string;
  children: ReactNode;
  backgroundColor?: 'beige1' | 'green';
}

export const SectionTemplate:FC<ISectionTemplate> = ({ children, backgroundColor, id }) => {
  return (
    <section className={`sectionTemplate ${backgroundColor}`} id={id}>
      <div className="sectionTemplate__wrapper">
        {children}
      </div>
    </section>
  )
}
