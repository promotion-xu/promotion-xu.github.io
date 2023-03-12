import { createSlice } from "@reduxjs/toolkit";

interface IAppStoreState {
  theme: "light" | "dark";
}

const initialState: IAppStoreState = {
  theme: "dark",
};

export const appStore = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeThemeReducer: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const appStoreReducer = appStore.reducer;
