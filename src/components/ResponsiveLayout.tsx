import { useResponsive } from "../hooks/useResponsive";
import { MobileLayout } from "../layouts/MobileLayout";
import { TabletLayout } from "../layouts/TabletLayout";
import { DesktopLayout } from "../layouts/DesktopLayout";

export const ResponsiveLayout = (): JSX.Element => {
  const screenSize = useResponsive();

  switch (screenSize) {
    case 'mobile':
      return <MobileLayout />;
    case 'tablet':
      return <TabletLayout />;
    case 'desktop':
      return <DesktopLayout />;
    default:
      return <DesktopLayout />;
  }
};
