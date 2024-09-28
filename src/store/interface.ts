import { BlockNames, BlockTables } from "src/postBlocks/interfaces";
import { IFullPost, IShortPost, IUser } from "src/interfaces";

export interface newPostState {
  postData: IFullPost,
  newBlock: {
    newBlockName: BlockNames | null,
    newBlockTable: BlockTables | null,
  },
  update: {
    updateName: BlockNames | null,
    updateTable: BlockTables | null,
    updateBlockNumber: number | null,
  },
  isLoading: boolean,
  isLoadingBlock: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}

export interface postState {
  postData: IFullPost,
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}

export interface adminState {
  isAdmin: boolean,
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}

export interface allPostsState {
  shortPosts: IShortPost[],
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}

export interface mainState {
  topPosts: IShortPost[],
  scrollSection: string | null,
  scrollPadding: number | null,
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
  loadingRegister: boolean,
}

export interface usersState {
  users: IUser[],
  isLoading: boolean,
  successMessage: string | null,
  errorMessage: string | null,
}