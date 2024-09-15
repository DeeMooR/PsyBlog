import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, allPostsReducer, newPostReducer } from "./slices";
 
const store = configureStore({
  reducer: {
    newPost: newPostReducer,
    admin: adminReducer,
    allPosts: allPostsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем сериализацию для определённых частей состояния или действий
        ignoredActions: [
          'newPost/getFullPostAction/fulfilled',
          'allPosts/getShortPostsAdminAction/fulfilled'
        ],
        ignoredActionPaths: ['payload.image'],
        ignoredPaths: ['some.nested.path', 'newPost.postData.image'],
      },
    }),
})

export default store;