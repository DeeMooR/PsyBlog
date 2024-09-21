import React, { FC, ReactNode, useState } from 'react'
import { UseFormHandleSubmit } from 'react-hook-form';
import { useAppDispatch, useAppSelector, getNewPostNewBlockSelector, getNewPostUpdateSelector, getNewPostDataSelector } from 'src/store';
import { requestNewBlock, requestUpdateBlock } from 'src/helpers';
import { BaseBlockCreateTemplate, ModalConfirm } from 'src/components';
import './FormBlockCreateTemplate.css';
import { NewBlockTypes } from 'src/postBlocks/interfaces';

interface IFormBlockCreateTemplate {
  children: ReactNode;
  handleSubmit: UseFormHandleSubmit<any>;
  data: NewBlockTypes
}

export const FormBlockCreateTemplate:FC<IFormBlockCreateTemplate> = ({children, handleSubmit, data}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockName, newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);
  const [modal, setModal] = useState(false);

  const onSubmit = (data: NewBlockTypes) => {
    if (newBlockName) requestNewBlock({post_id, newBlockTable, data, dispatch});
    else setModal(true);
  }

  const clickUpdateBlock = () => {
    requestUpdateBlock({post_id, updateBlockNumber, data, dispatch});
    setModal(false);
  }
  
  return (
    <form className="newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BaseBlockCreateTemplate children={children} />
      {modal && <ModalConfirm action='update_block' clickApply={clickUpdateBlock} closeModal={() => setModal(false)} />}
    </form>
  )
}
