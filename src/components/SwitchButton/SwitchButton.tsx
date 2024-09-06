import React, { FC } from 'react';
import cn from 'classnames';
import './SwitchButton.css'

interface ISwitchButton {
  isActive: boolean;
  changeActivity: () => void;
  id: string;
}

export const SwitchButton:FC<ISwitchButton> = ({isActive, changeActivity, id}) => {

  const wrapperStyle = cn('switchButton', {
    isActive: isActive,
  });

  return (
    <div className={wrapperStyle}>
      <span className='switchButton__prefix'>{isActive ? 'Активен' : 'Неактивен'}</span>
      <label htmlFor={id} className='switchButton__switcher'>
        <input id={id} type="checkbox" className='switchButton__input' onClick={changeActivity} />
      </label>
    </div>
  );
};
