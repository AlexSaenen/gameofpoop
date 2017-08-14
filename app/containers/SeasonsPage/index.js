/*
 *
 * SeasonsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SeasonsList from 'components/SeasonsList';
import { makeSelectSeasons, makeSelectLoading, makeSelectError } from './selectors';
import { loadSeasons } from './actions';

export class SeasonsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onInitialLoad(this.props.params.serie);
  }

  render() {
    const { loading, error, seasons } = this.props;
    const seasonsListProps = {
      loading,
      error,
      seasons,
    };

    return (
      <SeasonsList {...seasonsListProps} />
    );
  }
}

SeasonsPage.propTypes = {
  seasons: PropTypes.oneOfType([
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
    onInitialLoad: (chosenSerie) => dispatch(loadSeasons(chosenSerie)),
  };
}

const mapStateToProps = createStructuredSelector({
  seasons: makeSelectSeasons(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonsPage);
