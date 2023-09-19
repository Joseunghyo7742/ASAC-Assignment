import { configureStore } from '@reduxjs/toolkit';
import { combineReudcers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from './userSlice';

const persistConfig = {
  key: 'root', //localstorage key
  storage, //로컬스토리지 사용
  whitelist: ['user'], //유지하고 싶은 값을 배열로 전달
  //balcklist: 유지하고 싶지 않은 값을 배열로 전ㄷ라.
};

const rootReducer = combineReudcers({
  //여러 개의 reducer를 하나의 root reducer로 합쳐준다.
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
//persistReducer: reducer 반환 API. 인자로 받은 config 객체를 reducer 함수에 적용해 enhanced reducer를 반환
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
