import { createSelector } from 'reselect';

/**
 * Direct selector to the seriesPage state domain
 */
const selectServer = (state) => state.get('server');

/**
 * Default selector used by SeriesPage
 */

 const makeSelectLoading = () => createSelector(
   selectServer,
   (serverState) => serverState.get('loading'),
 );

 const makeSelectError = () => createSelector(
   selectServer,
   (serverState) => serverState.get('error'),
 );

const makeSelectSeries = () => createSelector(
  selectServer,
  (serverState) => serverState.get('series'),
);

export {
  selectServer,
  makeSelectSeries,
  makeSelectError,
  makeSelectLoading,
};
