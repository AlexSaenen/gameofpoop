import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import SerieListItem from 'containers/SerieListItem';

function SeriesList({ loading, error, series }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (series !== false) {
    return <List items={series} component={SerieListItem} />;
  }

  return null;
}

SeriesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  series: PropTypes.any,
};

export default SeriesList;
