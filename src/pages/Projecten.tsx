import { useEffect } from "react";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionTitle from "@/components/shared/SectionTitle";

const projects = [
  {
    id: "modern-woonhuis",
    title: "Modern Woonhuis",
    category: "Residentieel",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2858&auto=format&fit=crop",
  },
  {
    id: "boutique-hotel",
    title: "Boutique Hotel",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "kantoor-renovatie",
    title: "Kantoor Renovatie",
    category: "Commercieel",
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "vrijstaande-villa",
    title: "Vrijstaande Villa",
    category: "Residentieel",
    imageUrl: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "horecagelegenheid",
    title: "Horecagelegenheid",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "zorginstelling",
    title: "Zorginstelling",
    category: "Zorg",
    imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2074&auto=format&fit=crop",
  }
];

export default function Projecten() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-custom">
          <SectionTitle
            title="Onze projecten"
            subtitle="Bekijk een selectie van onze recente en kenmerkende projecten voor zowel particuliere als zakelijke opdrachtgevers."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
