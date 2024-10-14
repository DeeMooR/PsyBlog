import React from 'react'
import { getNewPostDataSelector, getNewPostUpdateSelector, useAppSelector } from 'src/store';
import { ShowBlockInNewPost } from 'src/components';
import { updateBlock } from 'src/postBlocks/config';
import { IPostBlock } from 'src/interfaces';
import './NewPostBlocks.scss'

export const NewPostBlocks = () => {
  const { blocks } = useAppSelector(getNewPostDataSelector);
  const { updateTable, updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);

  const isUpdateBlock = (obj: IPostBlock) => {
    return updateTable === obj.table_name && updateBlockNumber === obj.block_number;
  }
  
  return (
    <div className='newPostBlocks'>
      {blocks.map((obj, index) => (
        isUpdateBlock(obj) && updateTable ? (
          <div className="newPostBlocks__updateBlock" key={index}>
            {updateBlock[updateTable](obj.fields)}
          </div>
        ) : (
          <ShowBlockInNewPost obj={obj} key={index} />
        )
      ))}
    </div>
  )
}
