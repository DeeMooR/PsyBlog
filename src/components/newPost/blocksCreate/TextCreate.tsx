import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBlockCreateTemplate, Textarea } from 'src/components';
import { textScheme } from 'src/validation';
import { IText } from '../interfaces';
import './Create.css';

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
    <FormBlockCreateTemplate handleSubmit={handleSubmit} data={getValues()}>
      <div className="newBlock__fields">
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
