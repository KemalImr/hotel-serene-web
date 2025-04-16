
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import RoomShowcase from "@/components/home/RoomShowcase";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <RoomShowcase />
      <AmenitiesSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
