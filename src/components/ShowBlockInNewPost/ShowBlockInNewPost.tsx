import React, { FC, useState } from 'react'
import { IPostBlock } from 'src/interfaces'
import { basketIcon, pencilIcon } from 'src/assets'
import { Blockquote, IBlockquote, ITitle, Title, Text, IText, ModalConfirm, TitleAndText, ITitleAndText, IList, List } from 'src/components';
import './ShowBlockInNewPost.css'
import { deleteBlockAction, getNewPostDataSelector, setNewPostUpdate, useAppDispatch, useAppSelector } from 'src/store';

const showBlock = {
  'title': (obj: ITitle) => <Title obj={obj} />,
  'text': (obj: IText) => <Text obj={obj} />,
  'title_and_text': (obj: ITitleAndText) => <TitleAndText obj={obj} />,
  'quote': (obj: IBlockquote) => <Blockquote obj={obj} />,
  'list': (obj: IList) => <List obj={obj} />,
};

interface IShowBlockInNewPost {
  obj: IPostBlock
}

export const ShowBlockInNewPost:FC<IShowBlockInNewPost> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(getNewPostDataSelector);
  const {table_name, fields, block_number} = obj;

  const [modal, setModal] = useState(false);
  const [blockNumber, setBlockNumber] = useState<number | null>(null);

  const deleteBlockOpenModal = (block_number: number) => {
    setBlockNumber(block_number);
    setModal(true);
  }

  const deleteBlock = () => {
    if (id && blockNumber) {
      const body = {post_id: id, block_number: blockNumber};
      dispatch(deleteBlockAction(body))
    }
    setModal(false);
  }

  const setUpdateBlock = () => {
    dispatch(setNewPostUpdate({table_name, block_number}));
  }
  
  return (
    <div className="showBlockInNewPost">
      <div className="showBlockInNewPost__content">
        {showBlock[table_name](fields as any)}
      </div>
      <div className="showBlockInNewPost__icons">
        <img src={pencilIcon} onClick={setUpdateBlock} alt="pencil" />
        <img src={basketIcon} onClick={() => deleteBlockOpenModal(block_number)} alt="basket" />
      </div>
      {modal && <ModalConfirm action='delete_block' clickApply={deleteBlock} closeModal={() => setModal(false)} />}
    </div>
  )
}
