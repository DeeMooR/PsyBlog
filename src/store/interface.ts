import { IPostRequiredData } from "src/interfaces";

export interface newPostState {
  postData: IPostRequiredData,
  newBlockName: string | null,
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}