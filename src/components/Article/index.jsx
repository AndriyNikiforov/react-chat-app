import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Article = (props) => {
  const { data } = props;

  return (
    <article id="article">
      {data}
    </article>
  );
};

Article.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Article;
