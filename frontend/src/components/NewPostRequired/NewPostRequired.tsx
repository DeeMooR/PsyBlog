import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { createPostAction, updatePostAction, getNewPostDataSelector, useAppDispatch, useAppSelector, getNewPostSelector } from 'src/store';
import { IOptionalPostFields, IPostRequiredFieldsForm } from 'src/interfaces';
import { ModalConfirm } from 'src/components';
import { Input, InputFile, SwitchButton } from 'src/UI';
import { postRequiredScheme } from 'src/validation';
import { formatISOToShortDate } from 'src/helpers';
import './NewPostRequired.scss'

export const NewPostRequired = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { postData } = useAppSelector(getNewPostSelector);
  const { id } = useAppSelector(getNewPostDataSelector);

  const [active, setActive] = useState<boolean>(false);
  const [isTop, setTop] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');
  
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setError,
    formState: { errors },
  } = useForm<IPostRequiredFieldsForm>({
    mode: 'onSubmit',
    resolver: yupResolver(postRequiredScheme),
  });
  
  // заполнение дефолтными значениями
  useEffect(() => {
    const {isActive, topPriority, title, date} = postData;
    const dateStr = date ? formatISOToShortDate(new Date(date)) : null;
    // @ts-ignore  в inputDate передаю string
    reset({ title, date: dateStr });
    setActive(isActive);
    setTop(topPriority);
  }, [postData, reset]);

  // создать статью
  const onSubmit = async (data: IPostRequiredFieldsForm) => {
    if (!data.date) {
      setError('date', { message: 'Обязательное поле' });
      return;
    }
    if (!file && !postData.image) {
      setFileError('Обязательное поле');
      return;
    }

    if (!id) {
      try {
        const {date, title} = data;
        const body = {date, title, image: file, isActive: active, topPriority: isTop};
        const postId = await dispatch(createPostAction(body)).unwrap();
        if (postId) navigate(`/new-post/${postId}`);
      } catch {}
    }
    else setShowModal(true);
  }

  // обновить статью
  const clickUpdate = () => {
    let {date, title} = getValues();
    if (id && date) {
      const body = {date, title, image: file}
      dispatch(updatePostAction({id, body}));
    }
    setShowModal(false);
  }

  // изменить активность
  const changeActivity = () => {
    if (id) {
      let body: IOptionalPostFields = {isActive: !active};
      if (active == true && isTop == true) body.topPriority = false;
      dispatch(updatePostAction({id, body}));
    } else {
      setActive(!active);
      setTop(false);
    }
  }

  // изменить отображение на главной странице
  const changeTopPriority = () => {
    if (id) {
      const body = {topPriority: !isTop};
      dispatch(updatePostAction({id, body}));
    }
    else setTop(!isTop);
  }

  return (
    <div className='newPostRequired'>
      <div className="newPostRequired__up">
        <h4 className='newPostRequired__title'>Основные поля</h4>
        <div className="newPostRequired__switches">
          <SwitchButton 
            id='activity' 
            isActive={active} 
            changeActivity={changeActivity} 
            textActive='Активна' 
            textInactive='Неактивна' 
          />
          <SwitchButton 
            id='topPriority' 
            isActive={isTop} 
            changeActivity={changeTopPriority} 
            textActive='Отображается на главной' 
            textInactive='Не отображается на главной' 
            disabled={!active}
          />
        </div>
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
            error={fileError}
            setError={setFileError}
          />
        </div>
        <button className='newPostRequired__button smallBtn'>{id ? 'Изменить' : 'Сохранить'}</button>
      </form>
      {showModal && <ModalConfirm action='update_post' clickApply={clickUpdate} closeModal={() => setShowModal(false)} />}
    </div>
  )
}
