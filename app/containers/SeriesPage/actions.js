/*
 *
 * SeriesPage actions
 *
 */

import {
  LOAD_SERIES,
  LOAD_SERIES_ERROR,
  LOAD_SERIES_SUCCESS,
} from './constants';

 /**
  * Load series available on server
  *
  * @return {object}    An action object with a type of LOAD_SERIES
  */
export function loadSeries() {
  return {
    type: LOAD_SERIES,
  };
}

/**
 * When series from server have been loaded
 *
 * @param  {payload} payload The available series
 *
 * @return {object}          An action object with a type of LOAD_SERIES_SUCCESS and series payload
 */
export function seriesLoaded(payload) {
  return {
    type: LOAD_SERIES_SUCCESS,
    payload,
  };
}

/**
 * When loading series encountered an error
 *
 * @param  {error} error The load error message
 *
 * @return {object}      An action object with a type of LOAD_SERIES_ERROR and an error message
 */
export function seriesLoadingError(error) {
  return {
    type: LOAD_SERIES_ERROR,
    error,
  };
}
