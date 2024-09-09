import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getNewPostDataSelector, useAppDispatch, useAppSelector } from 'src/store';
import { createNewPostAction, updateNewPostAction } from 'src/store/actions';
import { Input, ModalConfirm, SwitchButton, Textarea } from 'src/components';
import { IPostRequiredFormFields } from 'src/interfaces';
import { postRequiredScheme } from 'src/validation';
import './NewPostRequired.css'

export const NewPostRequired = () => {
  const dispatch = useAppDispatch();
  const { id, isActive } = useAppSelector(getNewPostDataSelector);
  const [active, setActive] = useState<boolean>(isActive);
  const [showModal, setShowModal] = useState(false);
  
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IPostRequiredFormFields>({
    mode: 'onSubmit',
    resolver: yupResolver(postRequiredScheme),
  });

  const onSubmit = (data: IPostRequiredFormFields) => {
    const body = {...data, isActive: active};
    if (!id) dispatch(createNewPostAction(body));
    else setShowModal(true);
  }

  const clickUpdate = () => {
    const body = {...getValues(), isActive: active};
    if (id) dispatch(updateNewPostAction({id, body}));
    setShowModal(false);
  }

  const changeActivity = () => {
    setActive(!active);
  }

  return (
    <div className='newPostRequired'>
      <div className="newPostRequired__up">
        <h4 className='newPostRequired__title'>Основные поля</h4>
        <SwitchButton id='newPost' isActive={active} changeActivity={changeActivity} />
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
      {showModal && <ModalConfirm action='update' clickApply={clickUpdate} closeModal={() => setShowModal(false)} />}
    </div>
  )
}
