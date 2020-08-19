import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick, text, name } = props;

  return (
    <button
      className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline "
      type="submit"
      name={name}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  name: '',
  onClick: () => {},
};

export default Button;
