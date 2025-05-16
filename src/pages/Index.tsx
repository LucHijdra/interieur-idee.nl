import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedQuote from "@/components/home/FeaturedQuote";
import Philosophy from "@/components/home/Philosophy";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ImageQuote from "@/components/home/ImageQuote";
import Reviews from "@/components/home/Reviews";

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedQuote />
      <ImageQuote />
      <Philosophy />
      <FeaturedProjects />
      <Reviews />
    </main>
  );
};

export default Index;
