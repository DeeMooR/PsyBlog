import React, { FC, ReactNode, useState } from 'react'
import { UseFormHandleSubmit } from 'react-hook-form';
import { useAppDispatch, useAppSelector, getNewPostNewBlockSelector, getNewPostUpdateSelector, getNewPostDataSelector } from 'src/store';
import { requestNewBlock, requestUpdateBlock } from 'src/helpers';
import { BaseBlockTemplate, ModalConfirm } from 'src/components';
import { BlockTypes } from 'src/postBlocks/interfaces';
import './FormBlockTemplate.scss';

interface IFormBlockTemplate {
  children: ReactNode;
  handleSubmit: UseFormHandleSubmit<any>;
  data: BlockTypes;
}

export const FormBlockTemplate:FC<IFormBlockTemplate> = ({children, handleSubmit, data}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockName, newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);
  const [modal, setModal] = useState(false);

  const onSubmit = (data: BlockTypes) => {
    if (newBlockName) requestNewBlock({post_id, newBlockTable, data, dispatch});
    else setModal(true);
  }

  const clickUpdateBlock = () => {
    requestUpdateBlock({post_id, updateBlockNumber, data, dispatch});
    setModal(false);
  }
  
  return (
    <form className="newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BaseBlockTemplate children={children} />
      {modal && <ModalConfirm action='update_block' clickApply={clickUpdateBlock} closeModal={() => setModal(false)} />}
    </form>
  )
}
