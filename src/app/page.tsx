import Hero from "@/components/Hero";
import ScrollingShowcase from "@/components/ScrollingShowcase";
import FeatureCards from "@/components/FeatureCards";
import { WaysToBuildIntro } from "@/components/WaysToBuild";
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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        className="overflow-visible pb-0"
        style={{ background: "linear-gradient(180deg, #16212E 0%, #1F2D43 100%)" }}
      >
        <ScrollingShowcase />
        <FeatureCards />
        <WaysToBuildIntro />
      </div>
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
      <Footer />
    </>
  );
}
