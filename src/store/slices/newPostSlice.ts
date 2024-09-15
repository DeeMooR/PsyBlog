import { createSlice } from '@reduxjs/toolkit'
import { newPostState } from '../interface';
import { createNewBlockAction, createPostAction, deleteBlockAction, deletePostAction, getFullPostAction, updateBlockAction, updatePostAction } from '../actions';
import { NewBlockNames } from 'src/components';
import { BlockNameToTableName, ISetNewPostUpdate, TableNameToBlockName } from '../config';

const initialState: newPostState = {
  postData: {
    id: null,
    title: '',
    image: null,
    date: '',
    isActive: false,
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
  successMessage: null,
  errorMessage: null,
}

const setLoading = (state: newPostState) => {
  state.isLoading = true;
  state.successMessage = null;
  state.errorMessage = null;
}

const newPostSlice = createSlice({
  name: 'newPost',
  initialState,
  reducers: {
    setNewPostNewBlock: (state, { payload }: {payload: NewBlockNames}) => {
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
    clearNewPostPostData: (state) => {
      Object.assign(state.postData, initialState.postData);
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
        console.log(payload)
        state.postData = {...payload};
      })
      .addCase(getFullPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при получении статьи';
      })

      .addCase(createPostAction.pending, setLoading)
      .addCase(createPostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = 'Статья успешно создана';
      })
      .addCase(createPostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при создании статьи';
      })

      .addCase(updatePostAction.pending, setLoading)
      .addCase(updatePostAction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.postData = {...payload};
        state.successMessage = 'Статья успешно изменена';
      })
      .addCase(updatePostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при изменении статьи';
      })

      .addCase(deletePostAction.pending, setLoading)
      .addCase(deletePostAction.fulfilled, (state) => {
        state.isLoading = false;
        Object.assign(state.postData, initialState.postData);
      })
      .addCase(deletePostAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при удалении статьи';
      })

      .addCase(createNewBlockAction.pending, setLoading)
      .addCase(createNewBlockAction.fulfilled, (state) => {
        state.isLoading = false;
        Object.assign(state.newBlock, initialState.newBlock);
      })
      .addCase(createNewBlockAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при создании блока';
      })
      
      .addCase(updateBlockAction.pending, setLoading)
      .addCase(updateBlockAction.fulfilled, (state) => {
        state.isLoading = false;
        Object.assign(state.update, initialState.update);
        state.successMessage = 'Блок успешно изменён';
      })
      .addCase(updateBlockAction.rejected, (state) => {
        state.isLoading = false;
        state.errorMessage = 'Ошибка при изменении блока';
      })

      .addCase(deleteBlockAction.pending, setLoading)
      .addCase(deleteBlockAction.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = 'Блок успешно удалён';
      })
      .addCase(deleteBlockAction.rejected, (state) => {
        state.isLoading = false;
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
    clearNewPostPostData, 
    clearNewPostMessages
  },
} = newPostSlice;