import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import SeriesPage from '../index';
import messages from '../messages';

describe('<SeriesPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <SeriesPage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
