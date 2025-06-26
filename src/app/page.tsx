"use client";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { StatsSection } from "@/components/StatsSection/StatsSection";
import { AllPetsSection } from "@/components/AllPetsSection/AllPetsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection/HowItWorksSection";
import { CTASection } from "@/components/CTASection/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <HeroSection />
        <StatsSection />
        <AllPetsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
