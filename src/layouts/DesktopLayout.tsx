import { FeaturesOverviewSection } from "../../FeaturesOverview";
import { ServicesSection } from "../../ServicesSection";
import { CallToActionSection } from "../../CallToActionSection";
import { FooterSection } from "../../FooterSection";

export const DesktopLayout = (): JSX.Element => {
  return (
    <main className="bg-white overflow-hidden w-full w-[1520px] h-[3926px] relative">
      <img
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1520px] h-[1180px] object-cover"
        alt="Background rectangle"
        src="assets/rectangle1.png"
      />
      
      <h1 className="absolute top-[120px] left-[calc(50.00%_-_700px)] bg-[linear-gradient(86deg,rgba(22,22,22,1)_0%,rgba(212,155,138,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Coolvetica-HeavyCompressed',Helvetica] font-black text-transparent text-[140px] tracking-[0] leading-[normal] whitespace-nowrap">
        HYPERSPECTRAL
      </h1>

      <nav
        className="absolute top-[51px] left-[calc(50.00%_-_613px)] w-[1200px] h-[66px] bg-[#f8fafc4f] rounded-[18px] border border-solid border-[#0000005c] shadow-[0px_3px_3px_#0000001a] gap-[var(--tokens-docs-structure-structure-gap-between)]"
        aria-label="Main navigation"
      />

      <button
        className="absolute top-[calc(50.00%_-_1624px)] left-1/2 -translate-x-1/2 w-[193px] h-[67px] flex rounded-[100px] overflow-hidden shadow-[0px_1px_8px_#0000001a,0px_0px_2px_#0000001a,inset_0px_0px_8px_#f2f2f2,inset_0px_0px_0px_1px_#a6a6a6,inset_-2px_-2px_0.5px_-2px_#262626,inset_2px_2px_0.5px_-2px_#262626,inset_3px_3px_0.5px_-3.5px_#ffffff] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] bg-[#f8fafc4f]"
        aria-label="Setup"
      >
        <span className="mt-[23.5px] w-[145px] h-5 ml-[21px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-black text-[32px] tracking-[-0.10px] leading-5 whitespace-nowrap">
          SETUP
        </span>
      </button>

      <div className="absolute w-[292px] h-10 top-[510px] left-[626px] flex gap-[15px]">
        <button className="w-[101px] h-10 relative" aria-label="Try now">
          <div className="absolute top-0 left-0 w-[99px] h-10 rounded-[11px] border border-solid border-[#e1970f] bg-[linear-gradient(131deg,rgba(255,213,56,1)_0%,rgba(254,207,35,1)_100%)]" />
          <span className="absolute top-2 left-[18px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#695a25] text-lg text-center tracking-[-1.00px] leading-6 whitespace-nowrap">
            Try now
          </span>
        </button>

        <button
          className="w-[178px] h-10 relative"
          aria-label="Download brochure"
        >
          <div className="w-44 h-10 bg-[#f5f5f5] border-[#bcbcbc] absolute top-0 left-0 rounded-[11px] border border-solid" />
          <span className="absolute top-2 left-[11px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#695a25] text-lg text-center tracking-[-1.00px] leading-6 whitespace-nowrap">
            Download brochure
          </span>
        </button>
      </div>

      <div className="absolute top-[588px] left-[calc(50.00%_-_713px)] w-[1426px] h-[863px] bg-[#d9d9d95c] rounded-3xl border border-solid border-[#0000002e] aspect-[1.75]" />

      <img
        className="absolute top-[600px] left-[calc(50.00%_-_700px)] w-[1400px] h-[862px] rounded-3xl"
        alt="Product demonstration"
        src="assets/dashboard.png"
      />

      <div
        className="absolute top-[969px] left-[-51px] w-[1650px] h-[540px] bg-white blur-[45.65px]"
        aria-hidden="true"
      />

      <FeaturesOverviewSection />

      <img
        className="absolute top-[2178px] left-[515px] w-[994px] h-[560px]"
        alt="Workflow diagram"
        src="assets/rectangle-2.png"
      />

      <ServicesSection />

      <img
        className="absolute w-0 h-0 top-[56.96%] left-[27.15%]"
        alt=""
        src="assets/vector10.png"
        aria-hidden="true"
      />

      <img
        className="absolute w-0 h-0 top-[57.56%] left-[27.15%]"
        alt=""
        src="assets/vector11.png"
        aria-hidden="true"
      />

      <CallToActionSection />

      <h2 className="absolute top-[2222px] left-[545px] h-6 [font-family:'DM_Sans-SemiBold',Helvetica] font-semibold text-black text-2xl leading-6 flex items-center justify-center tracking-[-1.00px] whitespace-nowrap">
        Hyperspectral Workflow
      </h2>

      <FooterSection />

      <button
        className="absolute top-[1104px] left-[calc(50.00%_-_155px)] w-[324px] h-[76px]"
        aria-label="Watch product demo"
      >
        <div className="absolute -top-1.5 left-[calc(50.00%_-_168px)] w-[332px] h-[88px] rounded-[60px] border-[6px] border-solid border-white bg-[linear-gradient(180deg,rgba(118,81,123,1)_0%,rgba(39,3,44,1)_100%)]" />
        <span className="absolute top-3.5 left-[82px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-white text-xl text-center tracking-[-1.00px] leading-6 whitespace-nowrap">
          Watch product demo
        </span>
        <span className="absolute top-10 left-[81px] [font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a78bab] text-[19px] text-center tracking-[-1.00px] leading-6 whitespace-nowrap">
          Get a full tour
        </span>
        <div className="absolute top-[11px] left-[15px] w-[54px] h-[54px] bg-white rounded-[27px]" />
        <img
          className="absolute top-[27px] left-[35px] w-[19px] h-[21px]"
          alt=""
          src="assets/vector12.png"
          aria-hidden="true"
        />
      </button>
    </main>
  );
};
