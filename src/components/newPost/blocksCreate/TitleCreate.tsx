import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormBlockCreateTemplate, Input } from 'src/components';
import { titleScheme } from 'src/validation';
import { ITitle } from '../interfaces';
import './Create.css';

interface ITitleCreate {
  obj?: ITitle
}

export const TitleCreate:FC<ITitleCreate> = ({obj}) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ITitle>({
    mode: 'onSubmit',
    resolver: yupResolver(titleScheme),
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
      </div>
    </FormBlockCreateTemplate>
  )
}
