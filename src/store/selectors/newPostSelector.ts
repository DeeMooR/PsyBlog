import { RootState } from "../hooks";

export const getNewPostSelector = (state: RootState) => state.newPost;

export const getNewPostDataSelector = (state: RootState) => state.newPost.postData;