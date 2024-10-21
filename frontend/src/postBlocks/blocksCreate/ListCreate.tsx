import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector, getNewPostDataSelector, useAppDispatch, setNewPostErrorMessage, getNewPostNewBlockSelector, getNewPostUpdateSelector } from 'src/store';
import { convertListItemsToText, createObjList, requestNewBlock, requestUpdateBlock } from 'src/helpers';
import { IList, ListTypes, convertListTypeEng, convertListTypeRu, list_types } from '../interfaces';
import { BaseBlockTemplate, ModalConfirm } from 'src/components';
import { RadioOption, Textarea } from 'src/UI';
import { listScheme } from 'src/validation';
import { IListForm } from 'src/interfaces';
import { list_placeholder } from 'src/config';
import './Create.scss';

interface IListCreate {
  obj?: IList
}

export const ListCreate:FC<IListCreate> = ({obj}) => {
  const dispatch = useAppDispatch();
  const { id: post_id } = useAppSelector(getNewPostDataSelector);
  const { newBlockTable } = useAppSelector(getNewPostNewBlockSelector);
  const { updateBlockNumber } = useAppSelector(getNewPostUpdateSelector);

  const defaultItems = convertListItemsToText(obj);
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
      return dispatch(setNewPostErrorMessage('Необходимо выбрать тип перечисления'));
    }
    if (!obj) {
      const data = createObjList(form, type);
      requestNewBlock({post_id, newBlockTable, data, dispatch});
    } 
    else setModal(true);
  }

  const clickUpdateBlock = () => {
    if (type) {
      const data = isDirty ? createObjList(getValues(), type) : {type: convertListTypeEng[type]};
      requestUpdateBlock({post_id, updateBlockNumber, data, dispatch});
    }
    setModal(false);
  }

  return (
    <form className="listCreate newBlock" onSubmit={handleSubmit(onSubmit)}>
      <BaseBlockTemplate>
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
          <Textarea 
            id='text' 
            register={register}
            max={255}
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
      </BaseBlockTemplate>
      {modal && <ModalConfirm action='update_block' clickApply={clickUpdateBlock} closeModal={() => setModal(false)} />}
    </form>
  )
}
