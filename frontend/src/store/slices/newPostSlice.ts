import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';
import { createBlockAction, createPostAction, deleteBlockAction, deletePostAction, getFullPostAction, updateBlockAction, updatePostAction } from '../actions';
import { BlockNameToTableName, ISetNewPostUpdate, TableNameToBlockName } from '../config';
import { BlockNames } from 'src/postBlocks/interfaces';

const initialState: newPostState = {
  postData: {
    id: null,
    title: '',
    image: null,
    date: null,
    isActive: false,
    topPriority: false,
    blocks: []
  },
  newBlock: {
    newBlockName: null,
    newBlockTable: null,
  },
  update: {
    updateName: null,
    updateTable: null,
    updateBlockNumber: null,
  },
  isLoading: false,
  isLoadingBlock: false,
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: newPostState) => {
  if (!state.isLoadingBlock) state.isLoading = true;
}

const setLoadingBlock = (state: newPostState) => {
  state.isLoadingBlock = true;
}

const newPostSlice = createSlice({
  name: 'newPost',
  initialState,
  reducers: {
    setNewPostNewBlock: (state, { payload }: {payload: BlockNames}) => {
      state.newBlock.newBlockName = payload;
      state.newBlock.newBlockTable = BlockNameToTableName[payload];
    },
    clearNewPostNewBlock: (state) => {
      Object.assign(state.newBlock, initialState.newBlock);
    },
    setNewPostUpdate: (state, { payload }) => {
      const {table_name, block_number}: ISetNewPostUpdate = payload;
      state.update.updateTable = table_name;
      state.update.updateName = TableNameToBlockName[table_name];
      state.update.updateBlockNumber = block_number;
    },
    clearNewPostUpdate: (state) => {
      Object.assign(state.update, initialState.update);
    },
    setNewPostErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    clearNewPost: (state) => {
      Object.assign(state, initialState);
    },
    clearNewPostMessages: (state) => {
      state.successMessage = null;
      state.errorMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFullPostAction.pending, setLoading)
      .addCase(getFullPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoadingBlock = false;
        state.postData = {...payload};
      })
      .addCase(getFullPostAction.rejected, (state) => {
        state.isLoading = false;
        state.isLoadingBlock = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при получении статьи';
      })

      .addCase(createPostAction.pending, setLoading)
      .addCase(createPostAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createPostAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при создании статьи';
      })

      .addCase(updatePostAction.pending, setLoading)
      .addCase(updatePostAction.fulfilled, (state) => {
        state.errorMessage = null;
        state.successMessage = 'Статья успешно изменена';
      })
      .addCase(updatePostAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при изменении статьи';
      })

      .addCase(deletePostAction.pending, setLoading)
      .addCase(deletePostAction.fulfilled, (state) => {
        state.isLoading = false;
        Object.assign(state.postData, initialState.postData);
      })
      .addCase(deletePostAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при удалении статьи';
      })

      .addCase(createBlockAction.pending, setLoadingBlock)
      .addCase(createBlockAction.fulfilled, (state) => {
        Object.assign(state.newBlock, initialState.newBlock);
      })
      .addCase(createBlockAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при создании блока';
      })
      
      .addCase(updateBlockAction.pending, setLoadingBlock)
      .addCase(updateBlockAction.fulfilled, (state) => {
        Object.assign(state.update, initialState.update);
        state.errorMessage = null;
        state.successMessage = 'Блок успешно изменён';
      })
      .addCase(updateBlockAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при изменении блока';
      })

      .addCase(deleteBlockAction.pending, setLoadingBlock)
      .addCase(deleteBlockAction.fulfilled, (state) => {
        state.errorMessage = null;
        state.successMessage = 'Блок успешно удалён';
      })
      .addCase(deleteBlockAction.rejected, (state) => {
        state.isLoading = false;
        state.successMessage = null;
        state.errorMessage = 'Ошибка при удалении блока';
      })
  },
})

export const {
  reducer: newPostReducer,
  actions: {
    setNewPostNewBlock, 
    clearNewPostNewBlock, 
    setNewPostUpdate, 
    clearNewPostUpdate, 
    setNewPostErrorMessage, 
    clearNewPost, 
    clearNewPostMessages
  },
} = newPostSlice;