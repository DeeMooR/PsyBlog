import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, allPostsReducer, newPostReducer } from "./slices";
 
const store = configureStore({
  reducer: {
    newPost: newPostReducer,
    admin: adminReducer,
    allPosts: allPostsReducer,
  }
})

export default store;