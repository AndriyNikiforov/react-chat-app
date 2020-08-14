import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const LinkList = (props) => {
  const { data } = props;
  const listItems = data.map((item) => (
    <li className="link-list-item">
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
