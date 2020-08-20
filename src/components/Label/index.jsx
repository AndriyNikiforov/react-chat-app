import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  const { text, labelFor } = props;

  return (
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={labelFor}
    >
      {text}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  labelFor: PropTypes.string,
};

Label.defaultProps = {
  text: '',
  labelFor: '',
};

export default Label;
