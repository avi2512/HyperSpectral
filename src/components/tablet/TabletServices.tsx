export const TabletServices = (): JSX.Element => {
  return (
    <section className="px-6 py-20 bg-gray-50">
      {/* Workflow Image */}
      <div className="text-center mb-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-black mb-12">
          Hyperspectral Workflow
        </h2>
        
        <div className="mb-12">
          <img
            className="w-full h-auto rounded-3xl shadow-xl"
            alt="Workflow diagram"
            src="assets/rectangle-2.png"
          />
        </div>

        {/* Services Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Mineral Classification
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Advanced AI-powered mineral identification using hyperspectral data analysis with state-of-the-art machine learning algorithms.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Geological Analysis
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Comprehensive geological insights through hyperspectral imaging technology for accurate terrain mapping and analysis.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
