import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BlockCreateTemplate, Textarea } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, getNewPostSelector, getNewPostNewBlockSelector } from 'src/store';
import { requestNewBlock } from 'src/helpers';
import { quoteScheme } from 'src/validation';
import { IBlockquote } from '../interfaces';
import './Create.css';

interface IBlockquoteCreate {
  obj?: IBlockquote
}

export const BlockquoteCreate:FC<IBlockquoteCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBlockquote>({
    mode: 'onSubmit',
    resolver: yupResolver(quoteScheme),
  });

  const onSubmit = (data: IBlockquote) => {
    requestNewBlock({post_id, newBlockTable, data, dispatch});
  }

  return (
    <form className="blockquoteCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BlockCreateTemplate>
        <div className="newBlock__fields">
          <Textarea 
            id='quote' 
            register={register}
            placeholder='Цитата'
            max={255}
            error={errors.quote?.message}
          />
        </div>
      </BlockCreateTemplate>
    </form>
  )
}
