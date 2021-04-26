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

// function* actionWeather() {
//   yield takeLatest("FETCHED_WEATHER", loadWeather);
//   // const state = yield select();
//   // console.log(state);
// }

function* watchForLoadWeather() {
  while (true) {
    const { city } = yield take("FETCH_WEATHER");
    yield takeLatest("LOADING", loadWeather);
    yield fork(loadWeather, city);

    //yield takeEvery('FETCH_WEATHER', loadWeather)
  }
}

// function* actionWatcher() {
//   yield takeLatest("LODING", watchForLoadWeather);
// }
// /*
// pick up city from the FETCH_WEATHER action to
// pass it as a param to loadWeather and to getWeather
// API call
// */

// function* watchAndLog() {
//   while (true) {
//     const action = yield take("*");
//     const state = yield select();

//     console.log("action", action);
//     console.log("state after", state);
//   }
// }

export default function* rootSaga() {
  yield all([
    // watchForLoadWeather(), watchAndLog()
    watchForLoadWeather()
    // actionWeather()
  ]);
}
