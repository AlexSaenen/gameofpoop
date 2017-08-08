/*
 *
 * SeriesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import makeSelectSeries from './selectors';

export class SeriesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.series.length}
      </div>
    );
  }
}

SeriesPage.propTypes = {
  series: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = createSelector(
  makeSelectSeries(),
  (series) => ({ series })
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);
