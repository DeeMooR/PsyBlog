import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, allPostsReducer, mainReducer, newPostReducer, usersReducer } from "./slices";
 
const store = configureStore({
  reducer: {
    newPost: newPostReducer,
    admin: adminReducer,
    allPosts: allPostsReducer,
    main: mainReducer,
    users: usersReducer
  }
})

export default store;