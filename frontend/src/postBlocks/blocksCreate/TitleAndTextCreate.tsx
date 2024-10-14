import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBlockTemplate } from 'src/components';
import { Input, Textarea } from 'src/UI';
import { titleAndTextScheme } from 'src/validation';
import { ITitleAndText } from '../interfaces';
import './Create.scss';

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
    <FormBlockTemplate handleSubmit={handleSubmit} data={getValues()}>
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
    </FormBlockTemplate>
  )
}
