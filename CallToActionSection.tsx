export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="absolute top-[2812px] left-1/2 -translate-x-1/2 w-[1484px] h-[446px] flex items-center justify-center">
      {/* Background box */}
      <div className="w-full h-full bg-[#240029] rounded-[44px] flex flex-col items-start justify-center px-[64px] gap-6">
        
        {/* Heading */}
        <h2 className="text-white [font-family:'DM_Sans-ExtraBold',Helvetica] font-extrabold text-[64px] leading-[72px] tracking-[-1px]">
          Get started with <br />
          Hyperspectral Analysis <br />
          Today
        </h2>

        {/* Paragraph */}
        <p className="[font-family:'DM_Sans-Medium',Helvetica] font-medium text-[#a58ca9] text-[28px] leading-[36px] tracking-[-1px] max-w-[700px]">
          Experience faster, more accurate mineral classification — from scan to
          final report, all in one smooth workflow.
        </p>

        {/* Button */}
        <button
          className="mt-2 w-[160px] h-[50px] border border-[#e1970f] bg-[linear-gradient(131deg,rgba(255,213,56,1)_0%,rgba(254,207,35,1)_100%)] rounded-[11px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#695a25] text-lg tracking-[-1px] leading-6 whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
          aria-label="Contact us to get started with Hyperspectral Analysis"
        >
          Contact us
        </button>
        
        
      </div>
    </section>
  );
};
