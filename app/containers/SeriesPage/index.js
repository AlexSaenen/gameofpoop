/*
 *
 * SeriesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SeriesList from 'components/SeriesList';
import { makeSelectSeries, makeSelectLoading, makeSelectError } from './selectors';
import { loadSeries } from './actions';

export class SeriesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onInitialLoad();
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
    PropTypes.object,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onInitialLoad: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onInitialLoad: () => dispatch(loadSeries()),
  };
}

const mapStateToProps = createStructuredSelector({
  series: makeSelectSeries(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);
