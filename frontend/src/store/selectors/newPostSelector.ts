import { RootState } from "../hooks";

export const getNewPostSelector = (state: RootState) => state.newPost;

export const getNewPostDataSelector = (state: RootState) => state.newPost.postData;

export const getNewPostNewBlockSelector = (state: RootState) => state.newPost.newBlock;

export const getNewPostUpdateSelector = (state: RootState) => state.newPost.update;