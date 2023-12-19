import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import responseSlice, {apiResponse} from './responseSlice';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     immutableCheck: {warnAfter: 128},
  //     serializableCheck: {warnAfter: 128},
  //   }),
});

sagaMiddleware.run(rootSaga);
