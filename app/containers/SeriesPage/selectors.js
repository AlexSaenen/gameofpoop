import { createSelector } from 'reselect';

/**
 * Direct selector to the seriesPage state domain
 */
const selectSeries = () => (state) => state.get('series');

/**
 * Default selector used by SeriesPage
 */

const makeSelectSeries = () => createSelector(
  selectSeries(),
  (substate) => substate.toJS()
);

export {
  selectSeries,
  makeSelectSeries,
};
