import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPostFields, IPostRequiredFields } from "src/interfaces";
import { createNewPostRequiredApi } from "../api";

export const createNewPostRequiredAction = createAsyncThunk<IPostFields, IPostRequiredFields>(
  'admin/createNewPostRequiredAction',
  async (body) => {
    const response = await createNewPostRequiredApi(body);
    return response;
  }
)