import { useState } from "react";

export const MobileHeader = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[#2d2d2d] text-xl font-bold">TEXMIN</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col py-4">
            <a href="#" className="px-4 py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors">
              Home
            </a>
            <a href="#" className="px-4 py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors">
              SAM Analysis
            </a>
            <a href="#" className="px-4 py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors">
              ML Analysis
            </a>
            <a href="#" className="px-4 py-3 text-[#ffd438] text-lg font-medium hover:text-[#ffd438] hover:bg-gray-50 transition-colors">
              Mineral Classification
            </a>
            <a href="#" className="px-4 py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors">
              The Leaf Disease
            </a>
            <div className="border-t border-gray-200 mt-2 pt-2">
              <button className="w-full px-4 py-3 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] hover:bg-gray-50 transition-colors text-left">
                Share Results
              </button>
              <button className="w-full mx-4 my-2 px-4 py-2 bg-[#4a3aff] text-white text-lg font-medium rounded-lg hover:bg-[#3a2fcc] transition-colors">
                New Analysis
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
