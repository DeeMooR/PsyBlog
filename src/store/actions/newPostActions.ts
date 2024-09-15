import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IFullPost, IPostRequiredFields, ICreateNewBlock, IUpdateBlock } from "src/interfaces";
import { createNewBlockApi, createPostApi, createPostImageApi, deleteBlockApi, deletePostApi, getFullPostApi, updateBlockApi, updatePostApi } from "../api";
import { postToPostFile } from "../config";

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
    const post = await postToPostFile(response);
    return post;
  }
)

export const createPostAction = createAsyncThunk<number | null, IPostRequiredFields>(
  'newPost/createPostAction',
  async (body, { dispatch }) => {
    const {image, ...fields} = body;
    const post = await createPostApi(fields);
    if (post.id) {
      const imageObj = {post_id: post.id, image};
      await createPostImageApi(imageObj);
      dispatch(getFullPostAction(post.id));
    }
    return post.id;
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

export const updateBlockAction = createAsyncThunk<void, IUpdateBlock>(
  'newPost/updateBlockAction',
  async ({post_id, block_number, fields}, {dispatch}) => {
    await updateBlockApi({post_id, block_number, fields});
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