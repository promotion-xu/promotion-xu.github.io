import { configureStore } from "@reduxjs/toolkit";
import { appStoreReducer } from "./app";

const store = configureStore({
  reducer: {
    appStoreReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IDispatch = typeof store.dispatch;

// export type Store = typeof store;

export default store;
