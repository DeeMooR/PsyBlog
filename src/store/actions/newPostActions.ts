import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IPostFields, IPostRequiredFields } from "src/interfaces";
import { createPostApi, deletePostApi, updatePostApi } from "../api";

interface IUpdatePostAction {
  id: number,
  body: IOptionalPostFields
}

export const createPostAction = createAsyncThunk<IPostFields, IPostRequiredFields>(
  'admin/createPostAction',
  async (body) => {
    const response = await createPostApi(body);
    return response;
  }
)

export const updatePostAction = createAsyncThunk<IPostFields, IUpdatePostAction>(
  'admin/updatePostAction',
  async ({id, body}) => {
    const response = await updatePostApi(id, body);
    return response;
  }
)

export const deletePostAction = createAsyncThunk<void, number>(
  'admin/deletePostAction',
  async (id) => {
    await deletePostApi(id);
  }
)