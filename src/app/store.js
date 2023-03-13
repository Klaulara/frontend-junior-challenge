import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/index';
import counterReducer from '../features/counter/index';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer
  },
})