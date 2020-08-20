import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  const { message, show } = props;

  if (!show) {
    return null;
  }

  return (
    <p className="text-red-500 text-xs italic">
      {message}
    </p>
  );
};

Error.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
};

Error.defaultProps = {
  show: true,
  message: '',
};

export default Error;
