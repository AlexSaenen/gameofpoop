/**
 * SerieListItem
 *
 * Lists the name and icon of a serie available on the server
 */

import React from 'react';

import ListItem from 'components/ListItem';
import SerieCover from './SerieCover';
import Wrapper from './Wrapper';

export class SerieListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    const content = (
      <Wrapper>
        <SerieCover src={item.url} alt={item.name} onClick={() => { alert('moving to ' + item.path); }} />
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

export default SerieListItem;
