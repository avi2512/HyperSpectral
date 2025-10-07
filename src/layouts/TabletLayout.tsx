import React from "react";
import { TabletHeader } from "../components/tablet/TabletHeader";
import { TabletHero } from "../components/tablet/TabletHero";
import { TabletFeatures } from "../components/tablet/TabletFeatures";
import { TabletServices } from "../components/tablet/TabletServices";
import { TabletCTA } from "../components/tablet/TabletCTA";
import { TabletFooter } from "../components/tablet/TabletFooter";

export const TabletLayout = (): JSX.Element => {
  return (
    <main className="bg-white min-h-screen w-full">
      <TabletHeader />
      <TabletHero />
      <TabletFeatures />
      <TabletServices />
      <TabletCTA />
      <TabletFooter />
    </main>
  );
};
