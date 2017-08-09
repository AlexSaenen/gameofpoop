/*
 *
 * SeriesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectSeries } from './selectors';
import { loadSeries } from './actions';

export class SeriesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);

    this.state = {
      loading: props.loading,
      series: props.series,
    };
  }

  componentDidMount() {
    this.props.dispatch(loadSeries());
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.loading,
      series: nextProps.series,
    });
  }

  render() {
    const series = this.state.series;
    const loading = this.state.loading;

    return (
      <div>
        <span>{series.length}</span>
        <span>{String(loading)}</span>
      </div>
    );
  }
}

SeriesPage.propTypes = {
  series: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectSeries(),
  (series) => ({ ...series })
);

export default connect(mapStateToProps)(SeriesPage);
