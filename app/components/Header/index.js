import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Logo from './Logo';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import LogoLink from './LogoLink';
import messages from './messages';

const HeaderWrapper = styled.div`
  display: flex;
  height: 4em;
  border-bottom: 1px dashed black;
  background-color: white;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <LogoLink to="/">
          <Logo src="favicon.ico" alt="Game of Poop" />
        </LogoLink>
        <NavBar>
          <HeaderLink to="/seasons">
            <FormattedMessage {...messages.seasons} />
          </HeaderLink>
          <HeaderLink to="/episodes">
            <FormattedMessage {...messages.episodes} />
          </HeaderLink>
        </NavBar>
      </HeaderWrapper>
    );
  }
}

export default Header;
