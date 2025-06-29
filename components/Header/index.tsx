import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
      <header className="w-full bg-white shadow-sm border-b border-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              width={50} 
              height={50} 
              alt="Flower Delivery Logo"
            
               className="cursor-pointer h-full w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 cursor-pointer">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 cursor-pointer">
              Shop Flowers
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 cursor-pointer">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 cursor-pointer">
              Contact Us
            </Link>
          </nav>

          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 cursor-pointer">
              Login
            </button>
            <button className="relative text-gray-700 hover:text-pink-600 transition-colors duration-200 cursor-pointer">
              <span className="sr-only">Cart</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L7 13m1 0v6a1 1 0 001 1h6a1 1 0 001-1v-6m-8 0V9a1 1 0 011-1h6a1 1 0 011 1v4.1" />
              </svg>
              {/* Cart badge */}
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-pink-600 focus:outline-none focus:text-pink-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
