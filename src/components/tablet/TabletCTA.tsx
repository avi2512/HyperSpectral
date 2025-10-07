import React from "react";

export const TabletCTA = (): JSX.Element => {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Transform Your Analysis?
        </h2>
        
        <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
          Join thousands of researchers and professionals who trust our hyperspectral analysis platform for accurate mineral classification and geological insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <button className="px-12 py-5 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-xl">
            Start Free Trial
          </button>
          <button className="px-12 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
            Contact Sales
          </button>
        </div>

        <div className="text-lg text-purple-200">
          No credit card required • 14-day free trial • Cancel anytime
        </div>
      </div>
    </section>
  );
};
