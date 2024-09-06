import { IPostFields } from "src/interfaces";

export interface newPostState {
  postData: IPostFields,
  newBlockName: string | null,
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}