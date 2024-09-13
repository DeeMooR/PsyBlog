import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { warningIcon } from 'src/assets';
import './Textarea.css'

interface ITextarea {
  id: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  max?: number,
  size?: 'small' | 'medium' | 'big';
  error?: string;
}

export const Textarea:FC<ITextarea> = ({id, register, placeholder, max = 255, size, error}) => {
  const [messageLength, setMessageLength] = useState(0);
  
  const textareaStyle = `textarea ${error ? 'warning' : ''} ${size}`;
  
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const message = event.target.value;
    setMessageLength(message.length);
  };
  
  return (
    <div className='textareaBlock'>
      <textarea 
        id={id}
        {...register(id)}
        maxLength={max}
        placeholder={placeholder}
        className={textareaStyle}
        onInput={handleMessageChange}
      />
      <div className='textareaBlock__count'>
        {messageLength}/{max}
      </div>
      {error &&
        <p className='error'>
          <img src={warningIcon} alt="warning" />
          <span>{error}</span>
        </p>
      }
    </div>
  )
}
