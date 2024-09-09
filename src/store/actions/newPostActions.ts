import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostFields, IPostRequiredFields } from "src/interfaces";
import { createNewPostApi, deleteNewPostApi, updateNewPostApi } from "../api";

interface IUpdateNewPostAction {
  id: number,
  body: IPostRequiredFields
}

export const createNewPostAction = createAsyncThunk<IPostFields, IPostRequiredFields>(
  'admin/createNewPostAction',
  async (body) => {
    const response = await createNewPostApi(body);
    return response;
  }
)

export const updateNewPostAction = createAsyncThunk<IPostFields, IUpdateNewPostAction>(
  'admin/updateNewPostAction',
  async ({id, body}) => {
    const response = await updateNewPostApi(id, body);
    return response;
  }
)

export const deleteNewPostAction = createAsyncThunk<void, number>(
  'admin/deleteNewPostAction',
  async (id) => {
    await deleteNewPostApi(id);
  }
)