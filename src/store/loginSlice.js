import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    error: null,
  },
  reducers: {
    loginUser(state, action) {
      state.token = action.payload;
      state.error = null;
    },
    logout(state) {
      state.token = null;
      state.error = null;
    },
  },
});

export const {loginUser, logout} = loginSlice.actions;

export const login = (email, password) => dispatch => {
  try {
    const requestData = {
      email: email,
      password: password,
    };
    dispatch(loginUser(requestData));
    return Promise.resolve(requestData);
  } catch (error) {
    console.log(error.message);
    return Promise.reject(error.message);
  }
};

export default loginSlice;
