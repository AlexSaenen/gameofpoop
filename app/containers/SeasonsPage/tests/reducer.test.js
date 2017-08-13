
import { fromJS } from 'immutable';
import seasonsPageReducer from '../reducer';

describe('seasonsPageReducer', () => {
  it('returns the initial state', () => {
    expect(seasonsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
