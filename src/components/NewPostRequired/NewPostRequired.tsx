import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPostAction, updatePostAction, getNewPostDataSelector, useAppDispatch, useAppSelector, getNewPostSelector } from 'src/store';
import { Input, InputFile, ModalConfirm, SwitchButton } from 'src/components';
import { IPostRequiredFieldsForm } from 'src/interfaces';
import { postRequiredScheme } from 'src/validation';
import './NewPostRequired.css'
import { useNavigate } from 'react-router-dom';
import { formatISOToShortDate } from 'src/helpers';

export const NewPostRequired = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { postData } = useAppSelector(getNewPostSelector);
  const { id } = useAppSelector(getNewPostDataSelector);

  const [active, setActive] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IPostRequiredFieldsForm>({
    mode: 'onSubmit',
    resolver: yupResolver(postRequiredScheme),
  });
  
  useEffect(() => {
    const {isActive, title, date} = postData;
    const dateStr = date ? formatISOToShortDate(new Date(date)) : null;
    //@ts-ignore
    reset({ title, date: dateStr });
    setActive(isActive);
  }, [postData, reset]);

  const onSubmit = async (data: IPostRequiredFieldsForm) => {
    const {date, title} = data;
    if (!id) {
      try {
        if (date) {
          const body = {date, title, image: file, isActive: active};
          const post_id = await dispatch(createPostAction(body)).unwrap();
          if (post_id) navigate(`/new-post/${post_id}`);
        }
      } catch {}
    }
    else setShowModal(true);
  }

  const clickUpdate = () => {
    let {date, title} = getValues();
    if (id && date) {
      const body = {date, title, image: file}
      dispatch(updatePostAction({id, body}));
    }
    setShowModal(false);
  }

  const changeActivity = () => {
    if (id) {
      const body = {isActive: !active};
      dispatch(updatePostAction({id, body}));
    }
    else setActive(!active);
  }

  return (
    <div className='newPostRequired'>
      <div className="newPostRequired__up">
        <h4 className='newPostRequired__title'>Основные поля</h4>
        <SwitchButton id='newPost' isActive={active} changeActivity={changeActivity} />
      </div>
      <form className="newPostRequired__form" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="newPostRequired__line">
          <Input 
            id='title' 
            register={register}
            type="text" 
            placeholder='Заголовок' 
            error={errors.title?.message}
          />
        </div>
        <div className="newPostRequired__line">
          <Input 
            id='date' 
            register={register}
            type="date" 
            placeholder='Дата' 
            error={errors.date?.message}
          />
          <InputFile 
            id='image'
            imageLink={postData.image}
            file={file}
            setFile={setFile}
          />
        </div>
        <button className='newPostRequired__button smallBtn'>{id ? 'Изменить' : 'Сохранить'}</button>
      </form>
      {showModal && <ModalConfirm action='update_post' clickApply={clickUpdate} closeModal={() => setShowModal(false)} />}
    </div>
  )
}
