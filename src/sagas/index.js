import { GetWeather } from "../api/weather";
import { all, put, call, take, fork, takeLatest } from "redux-saga/lib/effects";

function* loadWeather(city) {
  try {
    const result = yield call(GetWeather, city);

    yield put({ type: "FETCHED_WEATHER", payload: result });
  } catch (error) {
    yield put({ type: "WEATHER_LOAD_FAILURE", error });
  }
}

function* watchForLoadWeather() {
  while (true) {
    const { city } = yield take("FETCH_WEATHER");
    yield takeLatest("LOADING", loadWeather);
    yield fork(loadWeather, city);
  }
}

export default function* rootSaga() {
  yield all([watchForLoadWeather()]);
}
