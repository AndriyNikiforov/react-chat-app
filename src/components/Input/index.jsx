import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    value, placeholder, onChange, name,
  } = props;

  return (
    <input
      className="shadow appearance-none border rounded w-full py- px-3 text-gray"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  value: '',
  placeholder: '',
  onChange: () => {},
};

export default Input;
