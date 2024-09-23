import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBlockTemplate } from 'src/components';
import { Textarea } from 'src/UI';
import { textScheme } from 'src/validation';
import { IText } from '../interfaces';
import './Create.scss';

interface ITextCreate {
  obj?: IText
}

export const TextCreate:FC<ITextCreate> = ({obj}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IText>({
    mode: 'onSubmit',
    resolver: yupResolver(textScheme),
    defaultValues: obj,
  });
  
  return (
    <FormBlockTemplate handleSubmit={handleSubmit} data={getValues()}>
      <div className="newBlock__fields">
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
