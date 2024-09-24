import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth } from "src/interfaces";
import { loginApi, checkTokenApi, logoutApi } from "../api";

export const loginAction = createAsyncThunk<string, IAuth>(
  'admin/loginAction',
  async (body) => {
    const accessToken = await loginApi(body);
    return accessToken;
  }
)

export const checkTokenAction = createAsyncThunk<void, string>(
  'admin/checkTokenAction',
  async (body) => checkTokenApi(body)
)

export const logoutAction = createAsyncThunk<void, string | null>(
  'admin/logoutAction',
  async (body) => logoutApi(body)
)