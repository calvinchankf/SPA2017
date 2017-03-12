import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

import OfficeView from 'components/OfficeView'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter
  }
}

class Office extends React.Component {
  render() {
    const { count, add, minus } = this.props
    return (
      <OfficeView count={count} />
    );
  }
}

Office.defaultProps = {
};

Office.propTypes = {
  children: PropTypes.element,
  count: PropTypes.number,
  add: PropTypes.func,
  minus: PropTypes.func,
}

// export default Home;
export default connect(mapStateToProps, null)(Office);
