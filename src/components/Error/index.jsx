import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  const { message } = props;

  return (
    <p>
      {message}
    </p>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: '',
};

export default Error;
