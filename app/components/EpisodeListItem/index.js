/**
 * EpisodeListItem
 *
 * Lists the name and icon of a serie available on the server
 */

import React from 'react';
import { withRouter } from 'react-router';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export class EpisodeListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    const content = (
      <Wrapper onClick={() => { this.props.router.push(`${this.props.location.pathname}/${item.path}`); }}>
        {item.name}
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`serie-list-item-${item.path}`} item={content} />
    );
  }
}

EpisodeListItem.propTypes = {
  item: React.PropTypes.object,
};

export default withRouter(EpisodeListItem);
