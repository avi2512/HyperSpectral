export const TabletHero = (): JSX.Element => {
  return (
    <section className="pt-20 px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-30"
          alt="Background rectangle"
          src="assets/rectangle1.png"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-gray-800 to-orange-300 bg-clip-text mb-8 leading-tight">
          HYPERSPECTRAL
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Advanced hyperspectral analysis for mineral classification and geological insights
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#695a25] font-bold text-lg rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg">
            Try now
          </button>
          <button className="px-10 py-4 bg-gray-100 text-[#695a25] font-bold text-lg rounded-xl hover:bg-gray-200 transition-colors border border-gray-300">
            Download brochure
          </button>
        </div>

        {/* Setup Button */}
        <button className="px-8 py-4 bg-white/90 backdrop-blur-sm text-black font-semibold text-lg rounded-full shadow-lg hover:bg-white transition-colors">
          SETUP
        </button>
      </div>

      {/* Dashboard Preview */}
      <div className="relative mt-16 mx-auto max-w-5xl">
        <div className="bg-gray-200 rounded-3xl p-6 shadow-xl">
          <img
            className="w-full h-auto rounded-2xl"
            alt="Product demonstration"
            src="assets/dashboard.png"
          />
        </div>
        
        {/* Watch Demo Button */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="px-10 py-5 bg-gradient-to-b from-purple-600 to-purple-900 text-white font-bold rounded-full shadow-xl hover:from-purple-700 hover:to-purple-950 transition-all flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
            <div className="text-left">
              <div className="text-xl">Watch product demo</div>
              <div className="text-sm text-purple-200">Get a full tour</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
