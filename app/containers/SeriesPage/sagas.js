/**
 * Gets the series on the server
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_SERIES } from 'containers/SeriesPage/constants';
import { seriesLoaded, seriesLoadingError } from 'containers/SeriesPage/actions';

import request from 'utils/request';

/**
 * Server series request/response handler
 */
export function* getSeries() {
  const requestURL = 'here call api url to load series';

  try {
    // Call our request helper (see 'utils/request')
    const series = yield call(request, requestURL);
    yield put(seriesLoaded(series));
  } catch (err) {
    yield put(seriesLoadingError(err));
  }
}

// All sagas to be loaded
export default [
  getSeries,
];
