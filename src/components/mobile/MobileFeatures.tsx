interface MobileFeatureCard {
  icon: string;
  title: string;
  description: string;
}

export const MobileFeatures = (): JSX.Element => {
  const features: MobileFeatureCard[] = [
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
    <section className="px-4 py-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-yellow-400 mb-6">
          <div className="w-2 h-2 bg-gray-600 rounded-full" />
          <span className="text-gray-600 text-sm font-medium">Features</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Next-Gen Hyperspectral Mapping
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Count on us for advanced scanning, clear material insights, and practical workflows — all designed to help you work smarter and decide faster
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-3xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="mb-6">
              <img
                className="w-12 h-12"
                alt="Feature icon"
                src={feature.icon}
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
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
