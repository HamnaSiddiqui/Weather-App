import {createSlice} from '@reduxjs/toolkit';

const responseSlice = createSlice({
  name: 'response',
  initialState: {
    currentWeather: null,
    error: null,
  },
  reducers: {
    apiResponse(state, action) {
      state.currentWeather = action.payload;
      state.error = null;
    },
  },
});

export const {apiResponse} = responseSlice.actions;

export default responseSlice;
