import React from 'react';
import Hero from '../components/Hero';
import Events from '../components/Events';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Events />
    </main>
  );
};

export default Home;