import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import SeasonListItem from 'components/SeasonListItem';

function SeasonsList({ loading, error, seasons }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );

    return <List component={ErrorComponent} />;
  }

  if (seasons !== false) {
    return <List items={seasons.toArray()} component={SeasonListItem} />;
  }

  return null;
}

SeasonsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  seasons: PropTypes.any,
};

export default SeasonsList;
