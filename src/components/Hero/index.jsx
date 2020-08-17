import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  const { data } = props;

  return (
    <main className="container mx-auto pt-20">
      <div className="flex items-center flex-col lg:flex-row px-10 justify-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 flex flex-col mb-5">
          <span className="text-4xl lg:text-5xl font-bold capitalize text-red-400">
            We created security messenger
          </span>
          <span className="text-4xl lg:text-5xl font-bold capitalize text-red-500">
            RE:push
          </span>
          <p className="py-3 text-sm lg:text-lg font-light text-gray-800">
            {data}
          </p>
        </div>
      </div>
    </main>
  );
};

Hero.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Hero;
