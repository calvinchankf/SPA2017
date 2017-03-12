import React, { PropTypes } from 'react';

const OfficeView = ({ count }) => (
  <div>
    <div>{count}</div>
  </div>
);

OfficeView.propTypes = {
  count: PropTypes.number
}

export default OfficeView;
