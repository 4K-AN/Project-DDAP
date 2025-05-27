import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg backdrop-blur-sm border-b border-yellow-300/30">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* New Logo */}
          <div className="mr-3">
            <img 
              src="../public/Image-Upload/png/logo.png" 
              alt="GKMeal Logo" 
              className="h-10 w-10 object-contain drop-shadow-md"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                console.log('Logo failed to load:', e.currentTarget.src);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Logo loaded successfully')}
            />
            {/* Fallback jika image tidak load */}
          </div>
          <Link to="/" className="text-lg md:text-xl font-bold font-display text-white drop-shadow-sm">
            GKMeal
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-white hover:text-yellow-100 font-medium transition-colors duration-200 ${location.pathname === "/" ? "font-semibold text-yellow-100" : ""}`}
          >
            Home Page
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-yellow-100 font-medium transition-colors duration-200 ${location.pathname === "/about" ? "font-semibold text-yellow-100" : ""}`}
          >
            About Us
          </Link>
          <Link 
            to="/menu" 
            className={`text-white hover:text-yellow-100 font-medium transition-colors duration-200 ${location.pathname === "/menu" ? "font-semibold text-yellow-100" : ""}`}
          >
            Menu List
          </Link>
          <Link 
            to="/gallery" 
            className={`text-white hover:text-yellow-100 font-medium transition-colors duration-200 ${location.pathname === "/gallery" ? "font-semibold text-yellow-100" : ""}`}
          >
            Gallery
          </Link>
          <Link 
            to="/food-list" 
            className={`text-white hover:text-yellow-100 font-medium transition-colors duration-200 ${location.pathname === "/food-list" ? "font-semibold text-yellow-100" : ""}`}
          >
            Food List
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20 text-white" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white/90 rounded-md shadow-lg p-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home Page
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/menu" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu List
            </Link>
            <Link 
              to="/gallery" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/food-list" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Food List
            </Link>
            <Link 
              to="/profile" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Link 
              to="/cart" 
              className="text-foreground hover:text-primary font-medium p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;