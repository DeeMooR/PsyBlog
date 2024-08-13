import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Textarea } from 'src/components';
import { IShortCardWithoutId } from 'src/interfaces';
import { newPostRequired } from 'src/validation';
import './NewPostRequired.css'

export const NewPostRequired = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShortCardWithoutId>({
    mode: 'onSubmit',
    resolver: yupResolver(newPostRequired),
  });

  const onSubmit = (data: IShortCardWithoutId) => {
    console.log(data);
  }

  return (
    <div className='newPostRequired'>
      <h4 className='newPostRequired__title'>Основные поля</h4>
      <form className="newPostRequired__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="newPostRequired__left">
          <Input 
            id='title' 
            register={register}
            type="text" 
            placeholder='Заголовок' 
            error={errors.title?.message}
          />
          <Input 
            id='image' 
            register={register}
            type="text" 
            placeholder='Изображение' 
            error={errors.image?.message}
          />
        </div>
        <div className="newPostRequired__right">
          <Input 
            id='date' 
            register={register}
            type="text" 
            placeholder='Дата' 
            error={errors.date?.message}
          />
          <Textarea
            id='description'
            register={register}
            placeholder='Краткое описание' 
            error={errors.description?.message}
          />
          <button type='submit' className='newPostRequired__button btnWhite smallBtn'>Сохранить</button>
        </div>
      </form>
    </div>
  )
}
