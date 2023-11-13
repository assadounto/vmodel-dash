import {configureStore} from '@reduxjs/toolkit';
import { userSlice } from './login';
import { authApi } from './user';



export const store = configureStore({
  reducer: {
    user : userSlice.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
  
});


