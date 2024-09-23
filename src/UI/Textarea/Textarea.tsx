import React, { ChangeEvent, FC, useState } from 'react'
import { UseFormRegister } from 'react-hook-form';
import cn from 'classnames';
import { warningIcon } from 'src/assets';
import './Textarea.scss'

interface ITextarea {
  id: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  max?: number,
  error?: string;
}

export const Textarea:FC<ITextarea> = ({id, register, placeholder, max = 255, error}) => {
  const [messageLength, setMessageLength] = useState(0);
  
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const message = event.target.value;
    setMessageLength(message.length);
  };

  const textareaStyle = cn('textarea', {
    warning: error,
  });
  
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
