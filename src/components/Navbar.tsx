"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold text-blue-700 leading-none">ONCALL</span>
              <span className="text-sm font-semibold tracking-widest text-gray-600">IT SUPPORT</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 border-l pl-8">
              <a href="tel:0277777728" className="flex items-center text-blue-700 font-bold">
                <Phone className="w-4 h-4 mr-2" />
                027 777 7728
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:0277777728"
              className="block px-3 py-2 text-blue-700 font-bold flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              027 777 7728
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
