
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { SectionId } from '../types';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: `#${SectionId.Services}` },
    { label: 'About', href: `#${SectionId.About}` },
    { label: 'AI Advisor', href: `#${SectionId.AIAdvisor}` },
    { label: 'Contact', href: `#${SectionId.Contact}` },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Sahay<span className="text-blue-600">InfoTech</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`#${SectionId.Contact}`}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`#${SectionId.Contact}`}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};
