/**
 * SerieListItem
 *
 * Lists the name and icon of a serie available on the server
 */

import React from 'react';
import { connect } from 'react-redux';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export class SerieListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    const content = (
      <Wrapper>
        {item.name}
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`serie-list-item-${item.path}`} item={content} />
    );
  }
}

SerieListItem.propTypes = {
  item: React.PropTypes.object,
};

export default connect()(SerieListItem);
