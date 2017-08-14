import { createSelector } from 'reselect';

/**
 * Direct selector to the seasonsPage state domain
 */
const selectSeason = (state) => state.get('season');

/**
 * Default selector used by SeasonsPage
 */

const makeSelectLoading = () => createSelector(
 selectSeason,
 (serverState) => serverState.get('loading'),
);

const makeSelectError = () => createSelector(
 selectSeason,
 (serverState) => serverState.get('error'),
);

const makeSelectEpisodes = () => createSelector(
  selectSeason,
  (serverState) => serverState.get('episodes'),
);

export {
  selectSeason,
  makeSelectEpisodes,
  makeSelectError,
  makeSelectLoading,
};
