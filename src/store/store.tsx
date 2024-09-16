import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, allPostsReducer, mainReducer, newPostReducer } from "./slices";
 
const store = configureStore({
  reducer: {
    newPost: newPostReducer,
    admin: adminReducer,
    allPosts: allPostsReducer,
    main: mainReducer,
  }
})

export default store;