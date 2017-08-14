/**
 * Gets the episodes on the server
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_EPISODES } from 'containers/EpisodesPage/constants';
import { episodesLoaded, episodesLoadingError } from 'containers/EpisodesPage/actions';

import request from 'utils/request';

/**
 * Server episodes request/response handler
 */
export function* getEpisodes(action) {
  const requestURL = `http://localhost:3000/api/${action.loadProps.serie}/${action.loadProps.season}`;

  try {
    // Call our request helper (see 'utils/request')
    const episodes = yield call(request, requestURL);
    yield put(episodesLoaded(episodes));
  } catch (err) {
    yield put(episodesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* episodesData() {
  // Watches for LOAD_EPISODES actions and calls getEpisodes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_EPISODES, getEpisodes);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  episodesData,
];
