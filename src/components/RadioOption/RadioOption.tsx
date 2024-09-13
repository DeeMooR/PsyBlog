import React, { FC } from 'react'
import './RadioOption.css'
import { radioSelectedIcon, radioUnselectedIcon } from 'src/assets'
import { NewBlockNames } from '../newPost'

interface IRadioOption {
  value: string,
  selected: string | null,
  name: string,
  onClickOption: (value: any) => void
}

export const RadioOption:FC<IRadioOption> = ({value, selected, name, onClickOption}) => {
  const isSelected = value === selected;

  return (
    <label className="radioOption__box" key={value}>
      <input 
        type="radio" 
        name={name} 
        checked={value === selected} 
        onChange={() => onClickOption(value)} 
      />
      <img src={isSelected ? radioSelectedIcon : radioUnselectedIcon} className='radioOption__icon' alt="radio" />
      <p className='radioOption__text'>{value}</p>
    </label>
  )
}
