/*
 *
 * Player
 *
 */

import React, { PropTypes } from 'react';

import Video from './Video';
import Wrapper from './Wrapper';

export class Player extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { serie, season, episode } = this.props.params;

    return (
      <Wrapper>
        <Video src={`http://82.223.82.41:4080/api/${serie}/${season}/${episode}.mkv`} controls></Video>
      </Wrapper>
    );
  }
}

export default Player;
