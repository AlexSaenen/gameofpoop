import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import EpisodeListItem from 'components/EpisodeListItem';

function EpisodesList({ loading, error, episodes }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );

    return <List component={ErrorComponent} />;
  }

  if (episodes !== false) {
    return <List items={episodes.toArray()} component={EpisodeListItem} />;
  }

  return null;
}

EpisodesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  episodes: PropTypes.any,
};

export default EpisodesList;
