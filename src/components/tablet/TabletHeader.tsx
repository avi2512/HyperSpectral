import React, { useState } from "react";

export const TabletHeader = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-6 h-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[#2d2d2d] text-2xl font-bold">TEXMIN</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">Home</a>
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">SAM Analysis</a>
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">ML Analysis</a>
          <a href="#" className="text-[#ffd438] text-lg font-medium hover:text-[#ffd438] transition-colors">Mineral Classification</a>
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">The Leaf Disease</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-6 py-2 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">
            Share Results
          </button>
          <button className="px-6 py-2 bg-[#4a3aff] text-white text-lg font-medium rounded-lg hover:bg-[#3a2fcc] transition-colors">
            New Analysis
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col py-4 px-6">
            <a href="#" className="py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors rounded-lg px-3">
              Home
            </a>
            <a href="#" className="py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors rounded-lg px-3">
              SAM Analysis
            </a>
            <a href="#" className="py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors rounded-lg px-3">
              ML Analysis
            </a>
            <a href="#" className="py-3 text-[#ffd438] text-lg font-medium hover:text-[#ffd438] hover:bg-gray-50 transition-colors rounded-lg px-3">
              Mineral Classification
            </a>
            <a href="#" className="py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors rounded-lg px-3">
              The Leaf Disease
            </a>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <button className="w-full py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors rounded-lg px-3 text-left">
                Share Results
              </button>
              <button className="w-full mx-3 my-2 px-6 py-3 bg-[#4a3aff] text-white text-lg font-medium rounded-lg hover:bg-[#3a2fcc] transition-colors">
                New Analysis
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
