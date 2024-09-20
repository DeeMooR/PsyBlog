import { createAsyncThunk } from "@reduxjs/toolkit";
import { IOptionalPostFields, IFullPost, IPostRequiredFields, ICreateNewBlock, IUpdateBlock } from "src/interfaces";
import { createBlockApi, createPostApi, createPostImageApi, deleteBlockApi, deletePostApi, getFullPostApi, updateBlockApi, updatePostApi, updatePostImageApi } from "../api";

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
    const post = await getFullPostApi(id);
    return post;
  }
)

export const createPostAction = createAsyncThunk<number | null, IPostRequiredFields>(
  'newPost/createPostAction',
  async (body) => {
    const {image, ...fields} = body;
    const postId = await createPostApi(fields);
    if (postId) {
      await createPostImageApi({post_id: postId, image});
    }
    return postId;
  }
)

export const updatePostAction = createAsyncThunk<void, IUpdatePostAction>(
  'newPost/updatePostAction',
  async ({id, body}, {dispatch}) => {
    const {image, ...fields} = body;
    await updatePostApi(id, fields);
    if (image) {
      await updatePostImageApi(id, image);
    }
    dispatch(getFullPostAction(id));
  }
)

export const deletePostAction = createAsyncThunk<void, number>(
  'newPost/deletePostAction',
  (id) => deletePostApi(id)
)

export const createBlockAction = createAsyncThunk<void, ICreateNewBlock>(
  'newPost/createBlockAction',
  async ({post_id, table_name, fields}, {dispatch}) => {
    await createBlockApi({post_id, table_name, fields});
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