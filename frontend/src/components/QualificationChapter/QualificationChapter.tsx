import React, { FC } from 'react'
import { IQualificationChapter } from 'src/interfaces'
import cls from './QualificationChapter.module.css'

export const QualificationChapter:FC<IQualificationChapter> = ({title, items}) => {
  return (
    <div>
      <p className={cls.title}>{title}</p>
      <ul className={cls.list}>
        {items.map((value, i) => (
          <li className={cls.item} key={i}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
