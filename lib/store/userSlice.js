import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  CLIENT_ID: '',
  CLIENT_SECRET: '',
  ACCESS_TOKEN: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.CLIENT_ID = action.payload.CLIENT_ID;
      state.CLIENT_SECRET = action.payload.CLIENT_SECRET;
      state.ACCESS_TOKEN = action.payload.ACCESS_TOKEN;
    },
  },
});

export const { setUser } = userSlice.actions;
