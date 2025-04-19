
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const handleInitialAnimation = () => {
      // This function will be called once the page loads
      // We could add any initial animations or DOM manipulations here
      console.log("Page loaded, initial animations triggered");
    };

    handleInitialAnimation();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CaseStudySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
