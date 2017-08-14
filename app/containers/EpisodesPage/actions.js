/*
 *
 * EpisodesPage actions
 *
 */

import {
  LOAD_EPISODES,
  LOAD_EPISODES_ERROR,
  LOAD_EPISODES_SUCCESS,
} from './constants';

 /**
  * Load episodes available on server
  *
  * @return {object}    An action object with a type of LOAD_EPISODES
  */
export function loadEpisodes(loadProps) {
  return {
    type: LOAD_EPISODES,
    loadProps,
  };
}

/**
 * When episodes from server have been loaded
 *
 * @param  {payload} payload The available episodes
 *
 * @return {object}          An action object with a type of LOAD_EPISODES_SUCCESS and episodes payload
 */
export function episodesLoaded(payload) {
  return {
    type: LOAD_EPISODES_SUCCESS,
    payload,
  };
}

/**
 * When loading episodes encountered an error
 *
 * @param  {error} error The load error message
 *
 * @return {object}      An action object with a type of LOAD_EPISODES_ERROR and an error message
 */
export function episodesLoadingError(error) {
  return {
    type: LOAD_EPISODES_ERROR,
    error,
  };
}
