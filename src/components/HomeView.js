import React, { PropTypes } from 'react';

const HomeView = ({count, onAdd, onMinus}) => (
  <div>
    <div>{count}</div>
    <br/>
    <button onClick={onAdd}> + </button>
    <button onClick={onMinus}> - </button>
  </div>
);

HomeView.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
  onMinus: PropTypes.func
}

export default HomeView;
