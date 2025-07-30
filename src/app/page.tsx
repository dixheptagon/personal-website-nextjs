import { AboutMe } from "@/components/aboutme";
import ContactSection from "@/components/contact-form";
import ExperienceSection from "@/components/experience-section";
import { HeroSection } from "@/components/hero";
import ProjectSection from "@/components/projects-section";
import SkillSection from "@/components/skills-showcase";
import TestimonialsSection from "@/components/testimonials-section";
import React from "react";

export default function page() {
  return (
    <main className="relative h-full bg-white dark:bg-slate-950">
      <HeroSection />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
