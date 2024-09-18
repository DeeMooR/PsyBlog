import React from 'react'
import { usersPageTableColumns } from './config'
import './UsersPageTableHeader.css';

export const UsersPageTableHeader = () => {
  return (
    <div className='usersPageTableHeader'>
      {usersPageTableColumns.map(({title, className}) => (
        <div className={`usersPageTableHeader__column ${className}`}  key={title}>
          <p className='usersPageTableHeader__title'>{title}</p>
        </div>
      ))}
    </div>
  )
}
