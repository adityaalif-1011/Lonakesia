import Navbar from "@/components/landing/Navbar/Navbar";
import Hero from "@/components/landing/Hero/Hero";
import Explore from "@/components/landing/Explore/Explore";
import Feature from "@/components/landing/Feature/Feature";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Feature />
    </>
  );
}