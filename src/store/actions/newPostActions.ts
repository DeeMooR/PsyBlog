import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IFullPost, IPostRequiredFields, ICreateNewBlock } from "src/interfaces";
import { createNewBlockApi, createPostApi, deleteBlockApi, deletePostApi, getFullPostApi, updatePostApi } from "../api";

interface IUpdatePostAction {
  id: number,
  body: IOptionalPostFields
}

export interface IDeleteBlockAction {
  post_id: number,
  block_number: number
}

export const getFullPostAction = createAsyncThunk<IFullPost, number>(
  'newPost/getFullPostAction',
  async (id) => {
    const response = await getFullPostApi(id);
    return response;
  }
)

export const createPostAction = createAsyncThunk<IFullPost, IPostRequiredFields>(
  'newPost/createPostAction',
  async (body) => {
    const response = await createPostApi(body);
    return response;
  }
)

export const updatePostAction = createAsyncThunk<IFullPost, IUpdatePostAction>(
  'newPost/updatePostAction',
  async ({id, body}) => {
    const response = await updatePostApi(id, body);
    return response;
  }
)

export const deletePostAction = createAsyncThunk<void, number>(
  'newPost/deletePostAction',
  async (id) => {
    await deletePostApi(id);
  }
)

export const createNewBlockAction = createAsyncThunk<void, ICreateNewBlock>(
  'newPost/createNewBlockAction',
  async ({post_id, table_name, fields}, {dispatch}) => {
    await createNewBlockApi({post_id, table_name, fields});
    dispatch(getFullPostAction(post_id));
  }
)

export const deleteBlockAction = createAsyncThunk<void, IDeleteBlockAction>(
  'newPost/deleteBlockAction',
  async ({post_id, block_number}, {dispatch}) => {
    await deleteBlockApi({post_id, block_number});
    dispatch(getFullPostAction(post_id));
  }
)