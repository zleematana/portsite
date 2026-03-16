"use client";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import PhysicalSpecs from "@/components/PhysicalSpecs";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import GalleryStrip from "@/components/GalleryStrip";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <HeroSection />
      <PhysicalSpecs />
      <SkillsGrid />
      <ExperienceTimeline />
      <GalleryStrip />
      <ContactSection />
    </main>
  );
}
