export const MobileCTA = (): JSX.Element => {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-purple-600 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Analysis?
        </h2>
        
        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of researchers and professionals who trust our hyperspectral analysis platform for accurate mineral classification and geological insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
            Contact Sales
          </button>
        </div>

        <div className="mt-8 text-sm text-purple-200">
          No credit card required • 14-day free trial • Cancel anytime
        </div>
      </div>
    </section>
  );
};
