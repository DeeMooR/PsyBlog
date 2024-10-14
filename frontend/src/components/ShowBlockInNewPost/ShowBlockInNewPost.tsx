import React, { FC, useState } from 'react'
import { deleteBlockAction, getNewPostDataSelector, getNewPostNewBlockSelector, setNewPostErrorMessage, setNewPostUpdate, useAppDispatch, useAppSelector } from 'src/store';
import { showBlock } from 'src/postBlocks/config';
import {ModalConfirm} from 'src/components';
import { basketIcon, pencilIcon } from 'src/assets'
import { IPostBlock } from 'src/interfaces'
import './ShowBlockInNewPost.scss'

interface IShowBlockInNewPost {
  obj: IPostBlock
}

export const ShowBlockInNewPost:FC<IShowBlockInNewPost> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(getNewPostDataSelector);
  const { newBlockName } = useAppSelector(getNewPostNewBlockSelector);
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
    if (newBlockName) {
      return dispatch(setNewPostErrorMessage(`Перед редактированием блока завершите создание блока "${newBlockName}"`));
    }
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
