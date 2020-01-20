import { takeEvery, put, delay, all } from "redux-saga/effects";
import {
  SCORE_DOWN_ASYNC,
  SCORE_UP_ASYNC,
  SCORE_DOWN,
  SCORE_UP
} from "../actions/constants";

function* scoreUpAsync() {
  yield delay(2000);
  yield put({ type: SCORE_UP_ASYNC, score: 1 });
}

function* scoreDownAsync() {
  yield delay(2000);
  yield put({ type: SCORE_DOWN_ASYNC, score: 1 });
}

function* watchScoreUp() {
  yield takeEvery(SCORE_UP, scoreUpAsync);
}

function* watchScoreDown() {
  yield takeEvery(SCORE_DOWN, scoreDownAsync);
}

export default function* rootSaga() {
  yield all([watchScoreUp(), watchScoreDown()]);
}
