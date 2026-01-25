import Hero from "@/components/Hero";
import ScrollingShowcase from "@/components/ScrollingShowcase";
import FeatureCards from "@/components/FeatureCards";
import WaysToBuild from "@/components/WaysToBuild";
import BuildOptions from "@/components/BuildOptions";
import SolutionsFeatures from "@/components/SolutionsFeatures";
import ThemesSection from "@/components/ThemesSection";
import HeadlessSection from "@/components/HeadlessSection";
import OutOfBoxFeatures from "@/components/OutOfBoxFeatures";
import IntegrationsSection from "@/components/IntegrationsSection";
import AppsShowcase from "@/components/AppsShowcase";
import CheckoutSection from "@/components/CheckoutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingShowcase />
      <FeatureCards />
      <WaysToBuild />
      <BuildOptions />
      <SolutionsFeatures />
      <ThemesSection />
      <HeadlessSection />
      <OutOfBoxFeatures />
      <IntegrationsSection />
      <AppsShowcase />
      <CheckoutSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}
