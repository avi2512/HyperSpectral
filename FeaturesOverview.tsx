

interface FeatureCard {
  icon: {
    type: "single";
    images: string[];
    positions?: Array<{
      src: string;
      className: string;
    }>;
  };
  title: string;
  description: string;
}

export const FeaturesOverviewSection = (): JSX.Element => {
  const topRowFeatures: FeatureCard[] = [
    {
      icon: {
        type: "single",
        images: ["assets/icon-1.png"],
        positions: [],
      },
      title: "Advanced Binary Segmentation",
      description: "Voxel-wise binary segmentation with custom 3D CNN.",
    },
    {
      icon: {
        type: "single",
        images: ["assets/icon-2.png"],
        positions: [],
      },
      title: "Hyperspectral Cube Management",
      description: "Organize VNIR/HSI datasets with smart pipelines.",
    },
    {
      icon: {
        type: "single",
        images: ["assets/icon-3.png"],
        positions: [],
      },
      title: "Smart Patch Preparation",
      description: "Auto-generate patches with overlap and augmentation.",
    },
  ];

  const bottomRowFeatures: FeatureCard[] = [
    {
      icon: {
        type: "single",
        images: ["assets/icon-4.png"],
        positions: [],
      },
      title: "Fast Multi-Image Processing",
      description: "Train multiple images with weighting and checkpoints.",
    },
    {
      icon: {
        type: "single",
        images: ["assets/icon-5.png"],
        positions: [],
      },
      title: "Smooth Integration",
      description: "Segment, export masks, standard geospatial outputs.",
    },
    {
      icon: {
        type: "single",
        images: ["assets/icon-6.jpeg"],
        positions: [],
      },
      title: "Simple Reports, Smarter Insights",
      description: "Patch-wise metrics, precision–recall, auto reports.",
    },
  ];

  const renderIcon = (feature: FeatureCard) => {
    if (
      feature.icon.type === "single" &&
      feature.icon.positions &&
      feature.icon.positions.length === 0
    ) {
      return (
        <img
          className="relative w-[59px] h-[59px] mt-[-1.50px]"
          alt="Feature icon"
          src={feature.icon.images[0]}
        />
      );
    }

    return (
      <div className="flex w-[59px] h-[59px] items-center justify-center gap-2.5 p-2.5 relative mt-[-1.50px] rounded-[100px] border-[1.5px] border-solid border-[#12190a14] bg-[linear-gradient(131deg,rgba(255,213,56,1)_0%,rgba(254,207,35,1)_100%)]">
        <div className="relative w-8 h-8">
          {feature.icon.positions &&
            feature.icon.positions.map((position, index) => (
              <img
                key={index}
                className={position.className}
                alt="Vector"
                src={position.src}
              />
            ))}
        </div>
      </div>
    );
  };

  const renderFeatureCard = (feature: FeatureCard, index: number) => (
    <article
      key={index}
      className="flex flex-col items-center gap-8 px-0 py-10 relative flex-1 grow bg-[#f2f5f7] rounded-[40px] border-[1.5px] border-solid border-[#12190a14]"
    >
      {renderIcon(feature)}

      <div className="flex flex-col w-[266px] items-start gap-3 relative flex-[0_0_auto]">
        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Urbanist-SemiBold',Helvetica] font-semibold text-[#0a1519] text-2xl text-center tracking-[0] leading-[28.8px]">
          {feature.title.includes("<br />") ? (
            <>
              {feature.title.split("<br />")[0]}
              <br />
              {feature.title.split("<br />")[1]}
            </>
          ) : (
            feature.title
          )}
        </h3>

        <p className="relative self-stretch [font-family:'Urbanist-Medium',Helvetica] font-medium text-[#0a1519b2] text-base text-center tracking-[0] leading-[23.2px]">
          {feature.description}
        </p>
      </div>
    </article>
  );

  return (
    <section className="flex flex-col w-[1346px] h-[899px] items-center gap-10 absolute top-[1198px] left-[calc(50.00%_-_673px)]">
      <header className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 pl-3 pr-4 py-2 relative flex-[0_0_auto] bg-white rounded-[100px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[100px] before:[background:linear-gradient(131deg,rgba(255,213,56,1)_0%,rgba(254,207,35,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="relative w-1.5 h-1.5 bg-[#474747] rounded-[3px]" />

          <span className="[font-family:'Urbanist-Medium',Helvetica] font-medium text-[#474747] text-sm leading-[normal] relative w-fit mt-[-1.00px] tracking-[0]">
            Features
          </span>
        </div>

        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-[798px] mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0a1519] text-[64px] text-center tracking-[-1.28px] leading-[76.8px]">
            Next-Gen Hyperspectral Mapping
          </h2>

          <p className="relative w-[598px] [font-family:'Urbanist-Medium',Helvetica] font-medium text-[#0a1519b2] text-lg text-center tracking-[0] leading-[26.1px]">
            Count on us for advanced scanning, clear material insights, and
            practical workflows — all designed to help you work smarter and
            decide faster
          </p>
        </div>
      </header>

      <div className="flex flex-col w-[1240px] items-start gap-5 relative flex-[0_0_auto]">
        <div className="flex items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {topRowFeatures.map((feature, index) =>
            renderFeatureCard(feature, index),
          )}
        </div>

        <div className="flex items-center justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {bottomRowFeatures.map((feature, index) =>
            renderFeatureCard(feature, index),
          )}
        </div>
      </div>
    </section>
  );
};