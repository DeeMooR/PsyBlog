import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth } from "src/interfaces";
import { checkAdminApi } from "../api";

export const checkAdminAction = createAsyncThunk<boolean, IAuth>(
  'admin/checkAdminAction',
  async (body) => {
    const isAdmin = await checkAdminApi(body);
    return isAdmin;
  }
)