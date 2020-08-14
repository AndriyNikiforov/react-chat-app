import React from 'react';
import PropTypes from 'prop-types';

const LinkList = (props) => {
  const { data } = props;
  const listItems = data.map((item) => (
    <li className="">
      {item}
    </li>
  ));

  return (
    <ul className="link-list">
      {listItems}
    </ul>
  );
};

LinkList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

LinkList.defaultProps = {
  data: ['Item'],
};

export default LinkList;
