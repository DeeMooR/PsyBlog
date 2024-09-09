import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostFields, IPostRequiredFields } from "src/interfaces";
import { createNewPostRequiredApi, updateNewPostRequiredApi } from "../api";

interface IUpdateNewPostRequiredAction {
  id: number,
  body: IPostRequiredFields
}

export const createNewPostRequiredAction = createAsyncThunk<IPostFields, IPostRequiredFields>(
  'admin/createNewPostRequiredAction',
  async (body) => {
    const response = await createNewPostRequiredApi(body);
    return response;
  }
)

export const updateNewPostRequiredAction = createAsyncThunk<IPostFields, IUpdateNewPostRequiredAction>(
  'admin/updateNewPostRequiredAction',
  async ({id, body}) => {
    const response = await updateNewPostRequiredApi(id, body);
    return response;
  }
)