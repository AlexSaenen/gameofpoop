
import { fromJS } from 'immutable';
import seriesPageReducer from '../reducer';

describe('seriesPageReducer', () => {
  it('returns the initial state', () => {
    expect(seriesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
