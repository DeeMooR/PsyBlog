import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import './SwitchButton.css'

interface ISwitchButton {
  id: string;
  isActive: boolean | undefined;
  changeActivity: () => void;
  showPrefix?: boolean;
}

export const SwitchButton:FC<ISwitchButton> = ({id, isActive, changeActivity, showPrefix = true}) => {

  const wrapperStyle = cn('switchButton', {
    isActive: isActive,
  });

  return (
    <div className={wrapperStyle}>
      {!!showPrefix && <span className='switchButton__prefix'>{isActive ? 'Активен' : 'Неактивен'}</span>}
      <label htmlFor={id} className='switchButton__switcher'>
        <input id={id} type="checkbox" className='switchButton__input' onChange={changeActivity} />
      </label>
    </div>
  );
};
