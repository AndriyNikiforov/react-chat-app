import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { data } = props;

  return (
    <article className="article" id="article">
      {data}
    </article>
  );
};

Article.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Article;
