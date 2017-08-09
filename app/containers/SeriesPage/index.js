/*
 *
 * SeriesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSeries, makeSelectLoading, makeSelectError } from './selectors';
import { loadSeries } from './actions';
import SeriesList from 'components/SeriesList';

export class SeriesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(loadSeries());
  }

  render() {
    const { loading, error, series } = this.props;
    const seriesListProps = {
      loading,
      error,
      series,
    };

    return (
      <SeriesList {...seriesListProps} />
    );
  }
}

SeriesPage.propTypes = {
  series: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  series: makeSelectSeries(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps)(SeriesPage);
