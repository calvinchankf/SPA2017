import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import {
  increment,
  decrement
} from 'actions/counter.js';

// components
import HomeView from 'components/HomeView';

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: () => {
      dispatch(increment())
    },
    minus: () => {
      dispatch(decrement())
    }
  }
};

class Home extends React.Component {
  render() {
    const { count, add, minus } = this.props
    return (
      <HomeView count={count} onAdd={add} onMinus={minus} />
    );
  }
}

Home.defaultProps = {
};

Home.propTypes = {
  children: PropTypes.element,
  count: PropTypes.number,
  add: PropTypes.func,
  minus: PropTypes.func,
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
