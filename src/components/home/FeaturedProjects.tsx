
import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "../shared/ProjectCard";
import { Link } from "react-router-dom";

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
];

export default function FeaturedProjects() {
  return (
    <section className="section bg-offwhite">
      <div className="container-custom">
        <SectionTitle 
          title="Recente projecten"
          subtitle="Ontdek een selectie van onze meest recente projecten en laat u inspireren door onze aanpak."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/projecten"
            className="inline-block px-8 py-3 border border-taupe text-charcoal hover:bg-taupe hover:text-white transition-colors uppercase tracking-wider text-sm"
          >
            Bekijk alle projecten
          </Link>
        </div>
      </div>
    </section>
  );
}
