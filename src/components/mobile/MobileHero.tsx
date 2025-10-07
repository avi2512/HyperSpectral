import React from "react";

export const MobileHero = (): JSX.Element => {
  return (
    <section className="pt-16 px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-20"
          alt="Background rectangle"
          src="assets/rectangle1.png"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-gray-800 to-orange-300 bg-clip-text mb-6 leading-tight">
          HYPERSPECTRAL
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Advanced hyperspectral analysis for mineral classification and geological insights
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#695a25] font-bold rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg">
            Try now
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-gray-100 text-[#695a25] font-bold rounded-xl hover:bg-gray-200 transition-colors border border-gray-300">
            Download brochure
          </button>
        </div>

        {/* Setup Button */}
        <button className="px-6 py-3 bg-white/80 backdrop-blur-sm text-black font-semibold rounded-full shadow-lg hover:bg-white transition-colors">
          SETUP
        </button>
      </div>

      {/* Dashboard Preview */}
      <div className="relative mt-12 mx-auto max-w-4xl">
        <div className="bg-gray-200 rounded-2xl p-4 shadow-lg">
          <img
            className="w-full h-auto rounded-xl"
            alt="Product demonstration"
            src="assets/dashboard.png"
          />
        </div>
        
        {/* Watch Demo Button */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <button className="px-8 py-4 bg-gradient-to-b from-purple-600 to-purple-900 text-white font-bold rounded-full shadow-xl hover:from-purple-700 hover:to-purple-950 transition-all flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
            </div>
            <div className="text-left">
              <div className="text-lg">Watch product demo</div>
              <div className="text-sm text-purple-200">Get a full tour</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
