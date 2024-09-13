import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BlockCreateTemplate, Input, ModalConfirm } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, getNewPostNewBlockSelector, getNewPostUpdateSelector } from 'src/store';
import { requestNewBlock, requestUpdateBlock } from 'src/helpers';
import { titleScheme } from 'src/validation';
import { ITitle } from '../interfaces';
import './Create.css';

interface ITitleCreate {
  obj?: ITitle
}

export const TitleCreate:FC<ITitleCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ITitle>({
    mode: 'onSubmit',
    resolver: yupResolver(titleScheme),
    defaultValues: obj
  });

  const onSubmit = (data: ITitle) => {
    if (!obj) requestNewBlock({post_id, newBlockTable, data, dispatch});
    else setModal(true);
  }

  const clickUpdateBlock = () => {
    const data = getValues();
    requestUpdateBlock({post_id, updateBlockNumber, data, dispatch});
    setModal(false);
  }

  return (
    <form className="titleCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BlockCreateTemplate>
        <div className="newBlock__fields">
          <Input 
            id='title' 
            register={register}
            type="text"
            placeholder='Заголовок'
            error={errors.title?.message}
          />
        </div>
      </BlockCreateTemplate>
      {modal && <ModalConfirm action='update_block' clickApply={clickUpdateBlock} closeModal={() => setModal(false)} />}
    </form>
  )
}
