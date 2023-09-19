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
      return {
        ...state,
        CLIENT_ID: action.payload.CLIENT_ID,
        CLIENT_SECRET: action.payload.CLIENT_SECRET,
        ACCESS_TOKEN: action.payload.ACCESS_TOKEN,
      };
      //새로운 상태 객체를 반환하도록 코드를 작성해야 한다.
    },
  },
});

export const { setToken } = userSlice.actions;

export default userSlice;
