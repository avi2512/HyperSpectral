export const MobileServices = (): JSX.Element => {
  return (
    <section className="px-4 py-16 bg-gray-50">
      {/* Workflow Image */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-black mb-8">
          Hyperspectral Workflow
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <img
            className="w-full h-auto rounded-2xl shadow-lg"
            alt="Workflow diagram"
            src="assets/rectangle-2.png"
          />
        </div>
      </div>

      {/* Services Content */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mineral Classification
            </h3>
            <p className="text-gray-600 mb-4">
              Advanced AI-powered mineral identification using hyperspectral data analysis.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Geological Analysis
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive geological insights through hyperspectral imaging technology.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
