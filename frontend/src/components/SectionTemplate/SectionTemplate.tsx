import React, { FC, ReactNode } from 'react'
import cn from 'classnames';
import './SectionTemplate.scss'

interface ISectionTemplate {
  id: string;
  children: ReactNode;
  title?: string;
  titleColor?: 'white' | 'black';
  backgroundColor?: 'beige' | 'green';
}

export const SectionTemplate:FC<ISectionTemplate> = ({ id, children, title, titleColor, backgroundColor }) => {
  const sectionStyle = cn('sectionTemplate', {
    includeTitle: !!title,
    bgBeige: backgroundColor === 'beige',
    bgGreen: backgroundColor === 'green',
  });

  return (
    <section className={sectionStyle} id={id}>
      <div className="sectionTemplate__wrapper">
        {title && 
          <h2 className={`sectionTemplate__title title__${titleColor}`}>{title}</h2>
        }
        {children}
      </div>
    </section>
  )
}
