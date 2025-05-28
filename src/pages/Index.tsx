
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const Index: React.FC = () => {
  return (
    <div 
  className="gallery min-h-screen"
  style={{
    backgroundImage: `linear-gradient(to bottom right, rgba(0, 83, 100, 0.8), rgb(4, 28, 57))`
  }}
>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;
