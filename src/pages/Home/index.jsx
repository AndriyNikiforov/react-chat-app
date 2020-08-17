import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

const Home = () => (
  <div className="container mx-auto">
    <Header />
    <Hero data="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium dolorum asperiores officiis voluptate, et eligendi
            sapiente quasi similique odio modi?"
    />
    <Footer />
  </div>
);

export default Home;
