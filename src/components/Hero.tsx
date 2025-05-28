import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className=" flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-6">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              "Eat, Code, Repeat"
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 font-light leading-relaxed max-w-3xl mx-auto">
            A passionate coder fueled by snacks and curiosity. Building digital wonders one line at a time — then grabbing a bite and doing it all over again.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="pt-4">
          <Link to="/menu">
            <Button 
              className="bg-white text-black hover:bg-gray-100 text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white"
              size="lg"
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;