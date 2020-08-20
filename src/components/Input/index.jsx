import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    value, placeholder, onChange, name, type,
  } = props;

  return (
    <input
      type={type}
      className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => {},
};

export default Input;
