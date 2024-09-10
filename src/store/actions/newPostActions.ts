import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IPostFields, IPostRequiredFields } from "src/interfaces";
import { createPostApi, deletePostApi, getPostApi, updatePostApi } from "../api";

interface IUpdatePostAction {
  id: number,
  body: IOptionalPostFields
}

export const getPostAction = createAsyncThunk<IPostFields, number>(
  'newPost/getPostAction',
  async (id) => {
    const response = await getPostApi(id);
    return response;
  }
)

export const createPostAction = createAsyncThunk<IPostFields, IPostRequiredFields>(
  'newPost/createPostAction',
  async (body) => {
    const response = await createPostApi(body);
    return response;
  }
)

export const updatePostAction = createAsyncThunk<IPostFields, IUpdatePostAction>(
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