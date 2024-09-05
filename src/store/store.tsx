import { configureStore } from "@reduxjs/toolkit";
import { newPostReducer } from "./slices";
 
const store = configureStore({
  reducer: {
    newPost: newPostReducer,
  }
})

export default store;