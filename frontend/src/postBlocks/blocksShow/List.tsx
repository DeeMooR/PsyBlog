import React, { FC } from 'react'
import parse from 'html-react-parser';
import { formatTextLines } from 'src/helpers';
import { IList } from '../interfaces';
import './postBlocks.scss'

export const List:FC<{obj: IList}> = ({ obj }) => {
  const { text, type, items } = obj;
  return (
    <div className="list">
      {text && <p className='text'>{parse(formatTextLines(text))}</p>}
      {type === 'point' ? (
        <ul>
          {items.map((item, index) => 
            <li key={index}>{parse(formatTextLines(item))}</li>
          )}
        </ul>
      ) : (
        <ol>
          {items.map((item, index) => 
            <li key={index}>{parse(formatTextLines(item))}</li>
          )}
        </ol>
      )}
    </div>
  )
}
