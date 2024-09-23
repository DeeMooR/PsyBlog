import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { warningIcon } from 'src/assets';
import './Input.scss'

interface IInput {
  id: string;
  register: UseFormRegister<any>;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}

export const Input:FC<IInput> = ({id, register, type, placeholder, disabled, error}) => {
  const inputStyle = `${error ? 'warning' : ''}`;
  
  return (
    <div className='inputBlock'>
      <input 
        id={id}
        {...register(id)}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={inputStyle}
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
