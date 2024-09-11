import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BlockCreateTemplate, Input, Textarea } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, getNewPostSelector } from 'src/store';
import { requestNewBlock } from 'src/helpers';
import { titleAndTextScheme } from 'src/validation';
import { ITitleAndText } from '../interfaces';
import './Create.css';

interface ITitleAndTextCreate {
  obj?: ITitleAndText
}

export const TitleAndTextCreate:FC<ITitleAndTextCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitleAndText>({
    mode: 'onSubmit',
    resolver: yupResolver(titleAndTextScheme),
  });

  const onSubmit = (data: ITitleAndText) => {
    requestNewBlock({post_id, newBlockTable, data, dispatch});
  }

  return (
    <form className="titleAndTextCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BlockCreateTemplate>
        <div className="newBlock__fields">
          <Input 
            id='title' 
            register={register}
            type="text"
            placeholder='Заголовок'
            error={errors.title?.message}
          />
          <Textarea 
            id='text' 
            register={register}
            placeholder='Текст'
            max={2000}
            error={errors.text?.message}
          />
        </div>
      </BlockCreateTemplate>
    </form>
  )
}
