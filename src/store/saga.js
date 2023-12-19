import {ApiCalls} from './appAction';
import {call, takeLatest, put} from 'redux-saga/effects';
import {apiResponse} from './responseSlice';

function* fetchWeatherData(action) {
  try {
    const data = yield call(ApiCalls);
    consolr.log('I am working@@: @@');
    yield put(apiResponse(data));
  } catch (error) {
    console.log('error: ', error);
  }
}

function* watchFetchWeatherData() {
  yield takeLatest('FETCH_WEATHER_DATA', fetchWeatherData);
}

export default function* rootSaga() {
  yield [watchFetchWeatherData()];
}
