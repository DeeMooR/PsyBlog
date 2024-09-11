import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BlockCreateTemplate, Input } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, createNewBlockAction } from 'src/store';
import { titleScheme } from 'src/validation';
import { ITitle } from '../interfaces';
import './Create.css';
import { ICreateNewBlock } from 'src/interfaces';

interface ITitleCreate {
  obj?: ITitle
}

export const TitleCreate:FC<ITitleCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITitle>({
    mode: 'onSubmit',
    resolver: yupResolver(titleScheme),
  });

  const onSubmit = (data: ITitle) => {
    if (post_id) {
      const obj: ICreateNewBlock = {
        post_id,
        table_name: 'title',
        fields: data
      }
      dispatch(createNewBlockAction(obj))
    }
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
    </form>
  )
}
