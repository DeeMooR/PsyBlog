import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BlockCreateTemplate, Input, Textarea } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, getNewPostSelector } from 'src/store';
import { requestNewBlock } from 'src/helpers';
import { listScheme } from 'src/validation';
import { IList } from '../interfaces';
import './Create.css';
import { IListForm } from 'src/interfaces';
import { list_placeholder } from 'src/config';

interface IListCreate {
  obj?: IList
}

export const ListCreate:FC<IListCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable, newBlockListType } = useAppSelector(getNewPostSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IListForm>({
    mode: 'onSubmit',
    resolver: yupResolver(listScheme),
  });

  const onSubmit = (form: IListForm) => {
    const items = form.items
      .split('\n')
      .map(item => item.substring(3)) // удалить [-]
      .map(item => item.trim())
      .filter(item => item !== '');
    const data = {
      text: form.text || null,
      type: newBlockListType,
      items
    }
    requestNewBlock({post_id, newBlockTable, data, dispatch});
  }

  return (
    <form className="listCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BlockCreateTemplate>
        <div className="newBlock__fields">
          <Input 
            id='text' 
            register={register}
            type="text"
            placeholder='Текст перед перечислением (необязательно)'
            error={errors.text?.message}
          />
          <Textarea 
            id='items' 
            register={register}
            placeholder={list_placeholder}
            max={2000}
            error={errors.items?.message}
          />
        </div>
      </BlockCreateTemplate>
    </form>
  )
}
