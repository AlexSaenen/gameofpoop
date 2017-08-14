/**
 * Gets the seasons on the server
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_SEASONS } from 'containers/SeasonsPage/constants';
import { seasonsLoaded, seasonsLoadingError } from 'containers/SeasonsPage/actions';

import request from 'utils/request';

/**
 * Server seasons request/response handler
 */
export function* getSeasons(action) {
  const requestURL = `http://localhost:3000/api/${action.chosenSerie}`;

  try {
    // Call our request helper (see 'utils/request')
    const seasons = yield call(request, requestURL);
    yield put(seasonsLoaded(seasons));
  } catch (err) {
    yield put(seasonsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* seasonsData() {
  // Watches for LOAD_SEASONS actions and calls getSeasons when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_SEASONS, getSeasons);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  seasonsData,
];
