import {combineReducers} from 'redux';
import loginSlice from './loginSlice';
import responseSlice from './responseSlice';

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  currentWeatherData: responseSlice.reducer,
});

export default rootReducer;
