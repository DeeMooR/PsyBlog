import React, { FC } from 'react'
import './QualificationChapter.scss'
import { IQualificationChapter } from 'src/interfaces'

export const QualificationChapter:FC<IQualificationChapter> = ({title, items}) => {
  return (
    <div className='qualificationChapter'>
      <p className='qualificationChapter__title'>{title}</p>
      <ul className='qualificationChapter__list'>
        {items.map(value => (
          <li className='qualificationChapter__item'>{value}</li>
        ))}
      </ul>
    </div>
  )
}
