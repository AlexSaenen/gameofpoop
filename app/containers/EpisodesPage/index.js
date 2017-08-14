/*
 *
 * EpisodesPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import EpisodesList from 'components/EpisodesList';
import { makeSelectEpisodes, makeSelectLoading, makeSelectError } from './selectors';
import { loadEpisodes } from './actions';

export class EpisodesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const initialLoadProps = {
      serie: this.props.params.serie,
      season: this.props.params.season,
    };

    this.props.onInitialLoad(initialLoadProps);
  }

  render() {
    const { loading, error, episodes } = this.props;
    const episodesListProps = {
      loading,
      error,
      episodes,
    };

    return (
      <EpisodesList {...episodesListProps} />
    );
  }
}

EpisodesPage.propTypes = {
  episodes: PropTypes.oneOfType([
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
    onInitialLoad: (loadProps) => dispatch(loadEpisodes(loadProps)),
  };
}

const mapStateToProps = createStructuredSelector({
  episodes: makeSelectEpisodes(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesPage);
