import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import BestSellers from '../components/BestSellers';
import AboutSection from '../components/About';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BestSellers />
      <AboutSection />
    </>
  );
};

export default Home;