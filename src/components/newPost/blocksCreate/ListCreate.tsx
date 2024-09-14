import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BaseBlockCreateTemplate, FormBlockCreateTemplate, Input, ModalConfirm, RadioOption, Textarea } from 'src/components';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, getNewPostSelector, setNewPostErrorMessage, getNewPostNewBlockSelector, getNewPostUpdateSelector } from 'src/store';
import { convertItemsToText, createObjListCreate, requestNewBlock, requestUpdateBlock } from 'src/helpers';
import { listScheme } from 'src/validation';
import { IList } from '../interfaces';
import { IListForm } from 'src/interfaces';
import { ListTypes, convertListTypeEng, convertListTypeRu, list_placeholder, list_types } from 'src/config';
import './Create.css';

interface IListCreate {
  obj?: IList
}

export const ListCreate:FC<IListCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);

  const defaultItems = convertItemsToText(obj);
  const defaultType = obj ? convertListTypeRu[obj.type] : null
  const [type, setType] = useState<ListTypes | null>(defaultType);
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty },
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
    if (!obj) {
      const data = createObjListCreate(form, type);
      requestNewBlock({post_id, newBlockTable, data, dispatch});
    } 
    else setModal(true);
  }

  const clickUpdateBlock = () => {
    if (type) {
      console.log(isDirty)
      const data = isDirty ? createObjListCreate(getValues(), type) : {type: convertListTypeEng[type]};
      requestUpdateBlock({post_id, updateBlockNumber, data, dispatch});
    }
    setModal(false);
  }

  return (
    <form className="listCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BaseBlockCreateTemplate>
        <div className="newBlock__radio">
          {list_types.map(value => 
            <RadioOption 
              value={value} 
              selected={type} 
              name='listType' 
              onClickOption={setType} 
              key={value}
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
      </BaseBlockCreateTemplate>
      {modal && <ModalConfirm action='update_block' clickApply={clickUpdateBlock} closeModal={() => setModal(false)} />}
    </form>
  )
}
