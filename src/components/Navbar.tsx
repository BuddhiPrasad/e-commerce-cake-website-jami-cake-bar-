import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface NavbarProps {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isCartOpen, setIsCartOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 font-serif text-2xl font-bold text-rose-600">
            Sweet Delights
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`${
                isActive('/shop') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 text-gray-700 hover:text-rose-600 transition relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-rose-600 transition"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 ${
                isActive('/') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`block px-3 py-2 ${
                isActive('/shop') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 ${
                isActive('/about') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 ${
                isActive('/contact') ? 'text-rose-600' : 'text-gray-700'
              } hover:text-rose-600 transition`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;