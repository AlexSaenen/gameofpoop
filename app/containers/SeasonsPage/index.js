/*
 *
 * SeasonsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import makeSelectSeasonsPage from './selectors';

export class SeasonsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        This is Seasons my lord
      </div>
    );
  }
}

// SeasonsPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   SeasonsPage: makeSelectSeasonsPage(),
// });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

export default connect()(SeasonsPage);
// export default connect(mapStateToProps, mapDispatchToProps)(SeasonsPage);
