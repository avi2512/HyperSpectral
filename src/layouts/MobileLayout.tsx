import { MobileHeader } from "../components/mobile/MobileHeader";
import { MobileHero } from "../components/mobile/MobileHero";
import { MobileFeatures } from "../components/mobile/MobileFeatures";
import { MobileServices } from "../components/mobile/MobileServices";
import { MobileCTA } from "../components/mobile/MobileCTA";
import { MobileFooter } from "../components/mobile/MobileFooter";

export const MobileLayout = (): JSX.Element => {
  return (
    <main className="bg-white min-h-screen w-full">
      <MobileHeader />
      <MobileHero />
      <MobileFeatures />
      <MobileServices />
      <MobileCTA />
      <MobileFooter />
    </main>
  );
};
