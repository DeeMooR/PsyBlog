import React, { FC } from 'react'
import parse from 'html-react-parser';
import { IList } from '../interfaces';
import './postBlocks.css'

export const List:FC<{obj: IList}> = ({ obj }) => {
  const { text, type, items } = obj;
  return (
    <div className="list">
      {text && <p className='text'>{parse(text)}</p>}
      {type === 'point' ? (
        <ul>
          {items.map((item, index) => 
            <li key={index}>{parse(item)}</li>
          )}
        </ul>
      ) : (
        <ol>
          {items.map((item, index) => 
            <li key={index}>{parse(item)}</li>
          )}
        </ol>
      )}
    </div>
  )
}
