import React, { FC, useEffect, useState } from 'react'
import cn from 'classnames';
import './Loading.scss'

interface ILoading {
  delay?: number,
  isPage?: boolean,
  isWrapperContent?: boolean,
}

export const Loading:FC<ILoading> = ({ delay = 0, isPage, isWrapperContent }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  const loadingStyle = cn('loading', {
    isPage: isPage,
    isWrapperContent: isWrapperContent,
  });

  return isActive ? (
    <div className={loadingStyle}>
      <div className='loading__spinner' />
    </div>
  ) : null;
}
