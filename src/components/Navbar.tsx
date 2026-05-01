"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Websites", href: "https://oncallwebsites.com" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="bg-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform">
                <img src="/images/logo.jpg" alt="Oncall IT Support" className="h-10 md:h-12 w-auto" />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  scrolled
                    ? "text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className={`flex items-center ml-6 pl-6 border-l ${scrolled ? "border-gray-200" : "border-white/20"}`}>
              <a
                href="tel:0277777728"
                className={`flex items-center px-5 py-2.5 rounded-xl font-bold transition-all ${
                  scrolled
                    ? "bg-brand-blue text-white hover:bg-brand-orange shadow-lg shadow-blue-900/20"
                    : "bg-white text-brand-blue hover:bg-brand-orange hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                027 777 7728
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${scrolled ? "text-gray-900" : "text-white"}`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-4 text-lg font-bold text-gray-900 hover:bg-gray-50 rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="tel:0277777728"
                className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold flex items-center justify-center text-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                027 777 7728
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
