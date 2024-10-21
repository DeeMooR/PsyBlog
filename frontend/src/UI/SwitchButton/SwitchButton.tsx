import React, { FC } from 'react';
import cn from 'classnames';
import './SwitchButton.scss'

interface ISwitchButton {
  id: string;
  isActive: boolean | undefined;
  changeActivity: () => void;
  textActive?: string;
  textInactive?: string;
  disabled?: boolean;
}

export const SwitchButton:FC<ISwitchButton> = ({id, isActive, changeActivity, textActive, textInactive, disabled}) => {
  const prefixText = isActive ? textActive : textInactive;

  const wrapperStyle = cn('switchButton', {
    isActive: isActive,
    isDisabled: disabled,
  });

  return (
    <div className={wrapperStyle}>
      {prefixText && <span className='switchButton__prefix'>{prefixText}</span>}
      <label htmlFor={id} className='switchButton__switcher'>
        <input id={id} type="checkbox" className='switchButton__input' onChange={changeActivity} disabled={disabled} />
      </label>
    </div>
  );
};
