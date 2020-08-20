import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
  const {
    placeholder, name, value, onChange,
  } = props;

  return (
    <textarea
      className="w-full border rounded focus:outline-none focus:shadow-outline"
      rows="10"
      cols="25"
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Textarea.defaultProps = {
  name: '',
  value: '',
  onChange: () => {},
  placeholder: '',
};

export default Textarea;
