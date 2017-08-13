import { createSelector } from 'reselect';

/**
 * Direct selector to the seasonsPage state domain
 */
const selectSeasonsPageDomain = () => (state) => state.get('seasonsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SeasonsPage
 */

const makeSelectSeasonsPage = () => createSelector(
  selectSeasonsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSeasonsPage;
export {
  selectSeasonsPageDomain,
};
