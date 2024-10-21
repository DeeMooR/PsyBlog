import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, allPostsReducer, mainReducer, newPostReducer, postReducer, usersReducer } from "./slices";
 
const store = configureStore({
  reducer: {
    newPost: newPostReducer,
    admin: adminReducer,
    allPosts: allPostsReducer,
    main: mainReducer,
    users: usersReducer,
    post: postReducer,
  }
})

export default store;