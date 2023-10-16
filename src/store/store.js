import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import responseSlice, {apiResponse} from './responseSlice';
import {getDefaultMiddleware} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    currentWeatherData: responseSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
