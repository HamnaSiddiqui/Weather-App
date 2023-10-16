import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import responseSlice, {apiResponse} from './responseSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    currentWeatherData: responseSlice.reducer,
  },
});
