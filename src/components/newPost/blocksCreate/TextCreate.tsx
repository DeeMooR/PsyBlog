import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BlockCreateTemplate, Textarea } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, getNewPostSelector, getNewPostNewBlockSelector } from 'src/store';
import { requestNewBlock } from 'src/helpers';
import { textScheme } from 'src/validation';
import { IText } from '../interfaces';
import './Create.css';

interface ITextCreate {
  obj?: IText
}

export const TextCreate:FC<ITextCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IText>({
    mode: 'onSubmit',
    resolver: yupResolver(textScheme),
  });

  const onSubmit = (data: IText) => {
    requestNewBlock({post_id, newBlockTable, data, dispatch});
  }

  return (
    <form className="textCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BlockCreateTemplate>
        <div className="newBlock__fields">
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
