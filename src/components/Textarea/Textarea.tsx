import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { warningIcon } from 'src/assets';
import './Textarea.css'

interface ITextarea {
  id: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  size?: 'small' | 'medium' | 'big';
  error?: string;
}

export const Textarea:FC<ITextarea> = ({id, register, placeholder, size, error}) => {
  const textareaStyle = `textarea ${error ? 'warning' : ''} ${size}`
  
  return (
    <div className='textareaBlock'>
      <textarea 
        id={id}
        {...register(id)}
        placeholder={placeholder}
        className={textareaStyle}
      />
      {error &&
        <p className='error'>
          <img src={warningIcon} alt="warning" />
          <span>{error}</span>
        </p>
      }
    </div>
  )
}
