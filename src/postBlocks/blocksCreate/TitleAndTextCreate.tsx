import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBlockCreateTemplate, Input, Textarea } from 'src/components';
import { titleAndTextScheme } from 'src/validation';
import { ITitleAndText } from '../interfaces';
import './Create.css';

interface ITitleAndTextCreate {
  obj?: ITitleAndText
}

export const TitleAndTextCreate:FC<ITitleAndTextCreate> = ({obj}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ITitleAndText>({
    mode: 'onSubmit',
    resolver: yupResolver(titleAndTextScheme),
    defaultValues: obj,
  });

  return (
    <FormBlockCreateTemplate handleSubmit={handleSubmit} data={getValues()}>
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
    </FormBlockCreateTemplate>
  )
}
