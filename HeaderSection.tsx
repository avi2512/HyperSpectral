export const HeaderSection = (): JSX.Element => {
  return (
    <header className="absolute top-0 left-0 w-full h-[120px] z-50">
      {/* Navigation Bar */}
      <nav className="absolute top-[20px] left-[calc(50%_-_600px)] w-[1200px] h-[66px] bg-[#f8fafc4f] rounded-[18px] border border-solid border-[#0000005c] shadow-[0px_3px_3px_#0000001a] backdrop-blur-sm">
        {/* TEXMIN Logo */}
        <div className="absolute top-[18px] left-[30px]">
          <span className="text-[#2d2d2d] text-2xl font-bold">TEXMIN</span>
        </div>

        {/* Navigation Links */}
        <div className="absolute top-[18px] left-[200px] flex gap-8">
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">Home</a>
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">SAM Analysis</a>
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">ML Analysis</a>
          <a href="#" className="text-[#ffd438] text-lg font-medium hover:text-[#ffd438] transition-colors">Mineral Classification</a>
          <a href="#" className="text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">The Leaf Disease</a>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-[18px] right-[30px] flex gap-4">
          <button className="px-6 py-2 text-[#2d2d2d] text-lg font-medium hover:text-[#4a3aff] transition-colors">
            Share Results
          </button>
          <button className="px-6 py-2 bg-[#4a3aff] text-white text-lg font-medium rounded-lg hover:bg-[#3a2fcc] transition-colors">
            New Analysis
          </button>
        </div>
      </nav>
    </header>
  );
};
