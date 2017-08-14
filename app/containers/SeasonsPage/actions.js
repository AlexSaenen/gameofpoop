/*
 *
 * SeriesPage actions
 *
 */

import {
  LOAD_SEASONS,
  LOAD_SEASONS_ERROR,
  LOAD_SEASONS_SUCCESS,
} from './constants';

 /**
  * Load seasons available on server
  *
  * @return {object}    An action object with a type of LOAD_SEASONS
  */
export function loadSeasons(chosenSerie) {
  return {
    type: LOAD_SEASONS,
    chosenSerie,
  };
}

/**
 * When seasons from server have been loaded
 *
 * @param  {payload} payload The available seasons
 *
 * @return {object}          An action object with a type of LOAD_SEASONS_SUCCESS and seasons payload
 */
export function seasonsLoaded(payload) {
  return {
    type: LOAD_SEASONS_SUCCESS,
    payload,
  };
}

/**
 * When loading seasons encountered an error
 *
 * @param  {error} error The load error message
 *
 * @return {object}      An action object with a type of LOAD_SEASONS_ERROR and an error message
 */
export function seasonsLoadingError(error) {
  return {
    type: LOAD_SEASONS_ERROR,
    error,
  };
}
