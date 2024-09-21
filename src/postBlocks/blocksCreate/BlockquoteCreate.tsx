import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBlockCreateTemplate, Textarea } from 'src/components';
import { quoteScheme } from 'src/validation';
import { IBlockquote } from '../interfaces';
import './Create.css';

interface IBlockquoteCreate {
  obj?: IBlockquote
}

export const BlockquoteCreate:FC<IBlockquoteCreate> = ({obj}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IBlockquote>({
    mode: 'onSubmit',
    resolver: yupResolver(quoteScheme),
    defaultValues: obj,
  });

  return (
    <FormBlockCreateTemplate handleSubmit={handleSubmit} data={getValues()}>
      <div className="newBlock__fields">
        <Textarea 
          id='quote' 
          register={register}
          placeholder='Цитата'
          max={255}
          error={errors.quote?.message}
        />
      </div>
    </FormBlockCreateTemplate>
  )
}
