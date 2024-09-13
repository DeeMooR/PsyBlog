import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BlockCreateTemplate, Input, RadioOption, Textarea } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, getNewPostSelector, setNewPostErrorMessage, getNewPostNewBlockSelector } from 'src/store';
import { createObjListCreate, requestNewBlock } from 'src/helpers';
import { listScheme } from 'src/validation';
import { IList } from '../interfaces';
import { IListForm } from 'src/interfaces';
import { ListTypes, convert_list_type_ru, list_placeholder, list_types } from 'src/config';
import './Create.css';

interface IListCreate {
  obj?: IList
}

export const ListCreate:FC<IListCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);

  const defaultItems = obj ? ('[-] ' + obj?.items.join('\n[-] ')) : '';
  const defaultType = obj ? convert_list_type_ru[obj.type] : null
  const [type, setType] = useState<ListTypes | null>(defaultType);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IListForm>({
    mode: 'onSubmit',
    resolver: yupResolver(listScheme),
    defaultValues: { text: obj?.text, items: defaultItems}
  });

  const onSubmit = (form: IListForm) => {
    if (!type) {
      dispatch(setNewPostErrorMessage('Необходимо выбрать тип перечисления'));
      return;
    }
    const data = createObjListCreate(form, type);
    requestNewBlock({post_id, newBlockTable, data, dispatch});
  }

  return (
    <form className="listCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BlockCreateTemplate>
        <div className="newBlock__radio">
          {list_types.map(value => 
            <RadioOption 
              value={value} 
              selected={type} 
              name='listType' 
              onClickOption={setType} 
            />
          )}
        </div>
        <div className="newBlock__fields">
          <Input 
            id='text' 
            register={register}
            type="text"
            placeholder='Текст перед перечислением (необязательно)'
            error={errors.text?.message}
          />
          <Textarea 
            id='items' 
            register={register}
            placeholder={list_placeholder}
            max={2000}
            error={errors.items?.message}
          />
        </div>
      </BlockCreateTemplate>
    </form>
  )
}
