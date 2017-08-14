/*
 *
 * EpisodesPage reducer
 *
 */

import { fromJS, Map } from 'immutable';
import {
  LOAD_EPISODES,
  LOAD_EPISODES_SUCCESS,
  LOAD_EPISODES_ERROR,
} from './constants';

const initialState = fromJS({
  episodes: false,
  loading: false,
  error: false,
});

function episodesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EPISODES:
      return state
      .set('loading', true)
      .set('error', false)
      .set('episodes', false);
    case LOAD_EPISODES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('episodes', Map(
          action.payload.map(
            (episode) => [episode.path, ({ ...episode })]
          )
        ));
    case LOAD_EPISODES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default episodesPageReducer;
