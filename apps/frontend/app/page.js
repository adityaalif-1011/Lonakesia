import Navbar from "@/components/landing/Navbar/Navbar";
import Hero from "@/components/landing/Hero/Hero";
import Explore from "@/components/landing/Explore/Explore";
import Feature from "@/components/landing/Feature/Feature";
import Showcase from "@/components/landing/Showcase/Showcase";
import Impact from "@/components/landing/Impact/Impact";
import CTA from "@/components/landing/CTA/CTA";
import Footer from "@/components/landing/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Feature />
      <Showcase />
      <Impact />
      <CTA />
      <Footer />
    </>
  );
}
