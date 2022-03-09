import {configureStore} from '@reduxjs/toolkit';
import webinarReducer from '../redux/slice';

export const store = configureStore({
  reducer: {
    webinar: webinarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
