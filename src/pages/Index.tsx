
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedQuote from "@/components/home/FeaturedQuote";
import Philosophy from "@/components/home/Philosophy";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProjectCategories from "@/components/home/ProjectCategories";

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      <ProjectCategories />
      <FeaturedQuote />
      <Philosophy />
      <FeaturedProjects />
    </main>
  );
};

export default Index;
