import {createSlice} from '@reduxjs/toolkit';

const responseSlice = createSlice({
  name: 'response',
  initialState: {
    currentWeather: {
      region: '',
      country: '',
      localtime: '',
      temp: '',
      text: '',
      forecast: [],
    },
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
