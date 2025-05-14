import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "../shared/ProjectCard";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "zondagsschool",
    title: "Woning in voormalige zondagsschool",
    category: "Residentieel",
    imageUrl: "/lovable-uploads/fotoss/mastenstraat header.jpg",
  },
  {
    id: "woonark",
    title: "Woonark in het Spaarne",
    category: "Residentieel",
    imageUrl: "/lovable-uploads/fotoss/woonark header.jpg",
  },
  {
    id: "brandweerkazerne",
    title: "Projectinrichting en kleuradvies brandweerkazerne",
    category: "Zakelijk",
    imageUrl: "/lovable-uploads/fotoss/brandweer header.jpg",
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
