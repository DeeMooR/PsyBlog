import React from 'react'
import { getNewPostDataSelector, getNewPostUpdateSelector, useAppSelector } from 'src/store';
import { IBlockquote, IList, IText, ITitle, ITitleAndText } from 'src/postBlocks/interfaces';
import { BlockquoteCreate, ListCreate, TextCreate, TitleAndTextCreate, TitleCreate } from 'src/postBlocks/blocksCreate';
import { ShowBlockInNewPost } from 'src/components';
import { IPostBlock } from 'src/interfaces';
import './NewPostBlocks.css'

const updateBlock = {
  'title': (obj: ITitle) => <TitleCreate obj={obj} />,
  'text': (obj: IText) => <TextCreate obj={obj} />,
  'title_and_text': (obj: ITitleAndText) => <TitleAndTextCreate obj={obj} />,
  'quote': (obj: IBlockquote) => <BlockquoteCreate obj={obj} />,
  'list': (obj: IList) => <ListCreate obj={obj} />,
};

export const NewPostBlocks = () => {
  const { blocks } = useAppSelector(getNewPostDataSelector);
  const { updateTable, updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);

  const itemIsUpdate = (obj: IPostBlock) => {
    return updateTable === obj.table_name && updateBlockNumber === obj.block_number;
  }
  
  return (
    <div className='newPostBlocks'>
      {blocks.map((obj, index) => (
        itemIsUpdate(obj) && updateTable ? (
          <div className="newPostBlocks__updateBlock" key={index}>
            {/* @ts-ignore */}
            {updateBlock[updateTable](obj.fields)}
          </div>
        ) : (
          <ShowBlockInNewPost obj={obj} key={index} />
        )
      ))}
    </div>
  )
}
