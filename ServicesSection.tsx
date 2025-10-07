import React from "react";


interface Step {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
}

export const ServicesSection = (): JSX.Element => {
  const steps: Step[] = [
    {
      number: "1",
      title: "Sample Preparation",
      description: "Deliver your mineral samples for scanning and analysis.",
      isActive: true,
    },
    {
      number: "2",
      title: "Image Acquisition",
      description:
        "Capture high-resolution hyperspectral scans under controlled lighting.",
      isActive: false,
    },
    {
      number: "3",
      title: "Data Processing",
      description:
        "Your scans are cleaned, segmented, and classified for accurate insights.",
      isActive: false,
    },
    {
      number: "4",
      title: "Results & Reporting",
      description:
        "Receive clear mineral maps, key metrics, and an easy-to-read report.",
      isActive: false,
    },
  ];

  const workflowFeatures = [
    "Sample preparation",
    "High-resolution scanning",
    "Data correction & classification",
    "Report generation",
  ];

  return (
    <section className="absolute top-[2172px] left-14 w-[1453px] h-[566px]">
      <div className="absolute top-0 left-0 w-[409px] h-[560px] bg-white rounded-[28px] border border-solid border-[#0000003d]" />

      <div className="absolute top-[81px] left-0 w-[584px] h-[410px]">
        <div className="flex flex-col w-[329px] absolute -top-6 left-[35px] items-start gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="inline-flex relative flex-[0_0_auto] items-start gap-4">
                {step.isActive ? (
                  <div className="inline-flex flex-col items-center justify-center gap-2.5 px-[13px] py-[11px] relative flex-[0_0_auto] mt-[-0.50px] ml-[-0.50px] rounded-[var(--core-templates-sizes-border-radius-BR-3)] border-[0.5px] border-solid border-[#ffface] shadow-[inset_0px_3px_4px_#dfedff1a,inset_0px_1px_1px_#ffffff1a,inset_0px_-2px_2px_#00428926,0px_2px_5px_#4a3aff40] bg-[linear-gradient(161deg,rgba(255,230,130,1)_0%,rgba(255,150,58,1)_100%)]">
                    <div className="relative self-stretch font-display-3-bold font-[number:var(--display-3-bold-font-weight)] text-core-templates-colors-neutrals-white text-[length:var(--display-3-bold-font-size)] tracking-[var(--display-3-bold-letter-spacing)] leading-[var(--display-3-bold-line-height)] [font-style:var(--display-3-bold-font-style)]">
                      {step.number}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col w-9 items-center justify-center gap-2 px-3 py-[11px] relative mt-[-1.00px] ml-[-1.00px] rounded-[var(--core-templates-sizes-border-radius-BR-3)] border border-solid border-core-templates-colors-neutrals-neutral-300 shadow-[inset_0px_4px_6px_#ffffff66,inset_0px_-2px_2px_#1b235512,0px_3px_6px_#07006e08] bg-[linear-gradient(153deg,rgba(255,255,255,1)_0%,rgba(251,251,254,1)_100%)] bg-core-templates-colors-neutrals-white-duplicate">
                    <div className="relative self-stretch bg-[linear-gradient(161deg,rgba(255,230,130,1)_0%,rgba(255,150,58,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-display-3-bold font-[number:var(--display-3-bold-font-weight)] text-transparent text-[length:var(--display-3-bold-font-size)] tracking-[var(--display-3-bold-letter-spacing)] leading-[var(--display-3-bold-line-height)] [font-style:var(--display-3-bold-font-style)]">
                      {step.number}
                    </div>
                  </div>
                )}

                <div
                  className={`flex flex-col ${index === 0 ? "w-[194px]" : "w-[206px]"} items-start gap-3 pt-0.5 pb-0 px-0 relative ${index === 0 ? "" : "mr-[-11.50px]"}`}
                >
                  <h3
                    className={`${index === 0 ? "relative w-fit mt-[-1.00px] mr-[-30.00px] [font-family:'DM_Sans-SemiBold',Helvetica] font-semibold text-core-templates-colors-neutrals-neutral-800 text-2xl tracking-[-0.24px] leading-[27.6px] whitespace-nowrap" : index === 1 ? "w-[239px] mr-[-33.00px] [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold tracking-[0] relative mt-[-1.00px] text-core-templates-colors-neutrals-neutral-800 text-2xl leading-[27.6px]" : index === 2 ? "self-stretch [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold tracking-[-0.24px] relative mt-[-1.00px] text-core-templates-colors-neutrals-neutral-800 text-2xl leading-[27.6px]" : "w-[253px] mr-[-47.00px] [font-family:'DM_Sans-SemiBold',Helvetica] font-semibold tracking-[-0.24px] relative mt-[-1.00px] text-core-templates-colors-neutrals-neutral-800 text-2xl leading-[27.6px]"}`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`${index === 0 ? "relative w-[193.49px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-core-templates-colors-neutrals-neutral-600 text-xs tracking-[0] leading-[18px]" : index === 1 ? "w-64 mr-[-50.00px] [font-family:'DM_Sans-Regular',Helvetica] relative font-normal text-core-templates-colors-neutrals-neutral-600 text-xs tracking-[0] leading-[18px]" : index === 2 ? "self-stretch [font-family:'Inter-Regular',Helvetica] relative font-normal text-core-templates-colors-neutrals-neutral-600 text-xs tracking-[0] leading-[18px]" : "self-stretch [font-family:'DM_Sans-Regular',Helvetica] relative font-normal text-core-templates-colors-neutrals-neutral-600 text-xs tracking-[0] leading-[18px]"}`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="inline-flex items-center gap-2.5 px-4 py-0 relative flex-[0_0_auto]">
                  {index === 0 ? (
                    <div className="relative w-10 h-[2.5px] ml-[-18.75px] mr-[-18.75px] bg-white rounded-[40px] -rotate-90">
                      <div className="relative left-5 w-5 h-0.5 rounded-[40px] bg-[linear-gradient(161deg,rgba(255,230,130,1)_0%,rgba(255,150,58,1)_100%)]" />
                    </div>
                  ) : index === 1 ? (
                    <div className="bg-[#e1e1e1] relative w-10 h-[2.5px] ml-[-18.75px] mr-[-18.75px] rounded-[40px] -rotate-90" />
                  ) : (
                    <div className="bg-[#e2e2e2] relative w-10 h-[2.5px] ml-[-18.75px] mr-[-18.75px] rounded-[40px] -rotate-90" />
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="absolute top-4 left-[489px] w-[376px] h-24 flex items-center justify-center [font-family:'DM_Sans-Regular',Helvetica] font-normal text-[#6d6d6d] text-lg tracking-[-1.00px] leading-6">
          Scan and process mineral samples in minutes
          <br />
          with our fully automated hyperspectral system —<br />
          from raw image capture to clear, decision-ready reports.
        </p>

        <div className="absolute top-[342px] left-[450px] w-[376px] h-28 flex items-center justify-center">
          <ul className="[font-family:'DM_Sans-Regular',Helvetica] font-normal text-[#6d6d6d] text-lg tracking-[-1.00px] leading-7 list-none p-0 m-0">
            {workflowFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <img
          className="absolute w-[2.40%] h-[2.20%] top-[85.61%] left-[86.13%]"
          alt="Checkmark icon"
          src={"assets/vector.png"}
        />

        <img
          className="absolute w-[2.40%] h-[2.20%] top-[92.20%] left-[86.13%]"
          alt="Checkmark icon"
          src={"assets/vector.png"}
        />
        <img
        className="absolute w-[2.40%] h-[2.20%] top-[99.51%] left-[86.13%]"
        alt="Checkmark icon"
        src={"assets/vector.png"}
        />

        <img
          className="absolute w-[2.40%] h-[2.20%] top-[105.85%] left-[86.13%]"
          alt="Checkmark icon"
          src={"assets/vector.png"}
        />
      </div>

      <div className="top-[150px] left-[1013px] h-[416px] absolute w-[440px]">
        <div className="absolute top-[52px] -left-0.5 w-[440px] h-[220px] bg-[url(/assets/service.png)] bg-cover bg-[50%_50%]" />

        <div className="flex flex-col h-[310px] items-start gap-12 pt-0 px-0 top-[180px] left-0 absolute w-[440px]">
        
          <header className="flex flex-col w-[440px] items-start gap-12 pt-0 px-0 relative">
            <div className="flex flex-col w-[440px] items-start pl-0 pr-[107.17px] pt-0 relative">
              <h2 className="relative flex items-center justify-center w-fit [font-family:'DM_Sans-Regular',Helvetica] font-normal text-[#0a0449] text-4xl tracking-[-1.00px] leading-[54px] whitespace-nowrap">
                Hyperspectral Analysis
              </h2>
              <h1 className="relative flex items-center justify-center w-fit [font-family:'DM_Sans_18pt-Bold',Helvetica] font-bold text-[#0a0449] text-[62.5px] tracking-[-2.40px] leading-[54px] whitespace-nowrap">
                How It Works
              </h1>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};