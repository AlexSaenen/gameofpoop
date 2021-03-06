import { createSelector } from 'reselect';

/**
 * Direct selector to the seasonsPage state domain
 */
const selectSerie = (state) => state.get('serie');

/**
 * Default selector used by SeasonsPage
 */

const makeSelectLoading = () => createSelector(
 selectSerie,
 (serverState) => serverState.get('loading'),
);

const makeSelectError = () => createSelector(
 selectSerie,
 (serverState) => serverState.get('error'),
);

const makeSelectSeasons = () => createSelector(
  selectSerie,
  (serverState) => serverState.get('seasons'),
);

export {
  selectSerie,
  makeSelectSeasons,
  makeSelectError,
  makeSelectLoading,
};
