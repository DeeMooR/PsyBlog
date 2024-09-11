import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IFullPost, IPostRequiredFields, ICreateNewBlock } from "src/interfaces";
import { createNewBlockApi, createPostApi, deletePostApi, getFullPostApi, updatePostApi } from "../api";
import { NewBlockTables, NewBlockTypes } from "src/components";

interface IUpdatePostAction {
  id: number,
  body: IOptionalPostFields
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