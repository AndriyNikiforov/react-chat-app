import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onSubmit, text, name } = props;

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      name={name}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  name: '',
  onSubmit: () => {},
};

export default Button;
