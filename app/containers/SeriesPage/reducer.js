/*
 *
 * SeriesPage reducer
 *
 */

import { fromJS, Map } from 'immutable';
import {
  LOAD_SERIES,
  LOAD_SERIES_SUCCESS,
  LOAD_SERIES_ERROR,
} from './constants';

const initialState = fromJS({
  series: false,
  loading: false,
  error: false,
});

function seriesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SERIES:
      return state
      .set('loading', true)
      .set('error', false)
      .set('series', false);
    case LOAD_SERIES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('series', Map(
          action.payload.map(
            (serie) => [serie.path, ({ ...serie })]
          )
        ));
    case LOAD_SERIES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default seriesPageReducer;
