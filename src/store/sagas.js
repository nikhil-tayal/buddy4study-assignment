import { call, put, takeEvery } from "redux-saga/effects";

import { REQUEST_API_MOVIE_DATA, receiveApiMovieData } from "./actions";
import { fetchData } from "./api";

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiMovieData(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* mySaga() {
  yield takeEvery(REQUEST_API_MOVIE_DATA, getApiData);
}