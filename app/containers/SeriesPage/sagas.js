/**
 * Gets the series on the server
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_SERIES } from 'containers/SeriesPage/constants';
import { seriesLoaded, seriesLoadingError } from 'containers/SeriesPage/actions';

import request from 'utils/request';

/**
 * Server series request/response handler
 */
export function* getSeries() {
  const requestURL = 'http://82.223.82.41:4080/api/';

  try {
    // Call our request helper (see 'utils/request')
    const series = yield call(request, requestURL);
    yield put(seriesLoaded(series));
  } catch (err) {
    yield put(seriesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* seriesData() {
  // Watches for LOAD_SERIES actions and calls getSeries when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_SERIES, getSeries);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  seriesData,
];
