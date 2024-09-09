import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, SwitchButton, Textarea } from 'src/components';
import { IPostRequiredFormFields } from 'src/interfaces';
import { postRequiredScheme } from 'src/validation';
import './NewPostRequired.css'
import { getNewPostDataSelector, useAppDispatch, useAppSelector } from 'src/store';

export const NewPostRequired = () => {
  const dispatch = useAppDispatch();
  const { isActive } = useAppSelector(getNewPostDataSelector);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostRequiredFormFields>({
    mode: 'onSubmit',
    resolver: yupResolver(postRequiredScheme),
  });

  const onSubmit = (data: IPostRequiredFormFields) => {
    console.log(data);
  }

  const changeActivity = () => {
    console.log(!isActive);
  }

  return (
    <div className='newPostRequired'>
      <div className="newPostRequired__up">
        <h4 className='newPostRequired__title'>Основные поля</h4>
        <SwitchButton id='newPost' isActive={isActive} changeActivity={changeActivity} />
      </div>
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
          <button className='newPostRequired__button smallBtn'>Сохранить</button>
        </div>
      </form>
    </div>
  )
}
