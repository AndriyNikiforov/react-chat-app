import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  const { text, labelFor } = props;

  return (
    <label htmlFor={labelFor}>
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
