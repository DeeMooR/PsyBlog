import { RootState } from "../hooks";

export const getPostSelector = (state: RootState) => state.post;

export const getPostDataSelector = (state: RootState) => state.post.postData;
