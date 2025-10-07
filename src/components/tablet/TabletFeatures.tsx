interface TabletFeatureCard {
  icon: string;
  title: string;
  description: string;
}

export const TabletFeatures = (): JSX.Element => {
  const features: TabletFeatureCard[] = [
    {
      icon: "assets/icon-1.png",
      title: "Advanced Binary Segmentation",
      description: "Voxel-wise binary segmentation with custom 3D CNN.",
    },
    {
      icon: "assets/icon-2.png",
      title: "Hyperspectral Cube Management",
      description: "Organize VNIR/HSI datasets with smart pipelines.",
    },
    {
      icon: "assets/icon-3.png",
      title: "Smart Patch Preparation",
      description: "Auto-generate patches with overlap and augmentation.",
    },
    {
      icon: "assets/icon-4.png",
      title: "Fast Multi-Image Processing",
      description: "Train multiple images with weighting and checkpoints.",
    },
    {
      icon: "assets/icon-5.png",
      title: "Smooth Integration",
      description: "Segment, export masks, standard geospatial outputs.",
    },
    {
      icon: "assets/icon-6.jpeg",
      title: "Simple Reports, Smarter Insights",
      description: "Patch-wise metrics, precision–recall, auto reports.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-white">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-yellow-400 mb-8">
          <div className="w-2 h-2 bg-gray-600 rounded-full" />
          <span className="text-gray-600 text-base font-medium">Features</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Next-Gen Hyperspectral Mapping
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Count on us for advanced scanning, clear material insights, and practical workflows — all designed to help you work smarter and decide faster
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="mb-8">
              <img
                className="w-16 h-16"
                alt="Feature icon"
                src={feature.icon}
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
              {feature.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
