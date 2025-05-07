
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "@/components/shared/SectionTitle";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample project data - in a real app this would come from an API or database
const projectData = {
  "modern-woonhuis": {
    title: "Modern Woonhuis",
    subtitle: "Transformatie van een traditionele woning naar een modern en licht familiehuis",
    location: "Delft",
    year: "2023",
    category: "Residentieel",
    description: "Deze ruime eengezinswoning uit de jaren '70 is volledig getransformeerd naar een licht en modern familiehuis. Door het optimaliseren van de indeling en het verwijderen van niet-dragende muren is een open leefruimte gecreëerd die perfect aansluit bij de wensen van de bewoners.",
    challenge: "De bestaande indeling was gedateerd met kleine, afgesloten ruimtes die weinig daglicht binnenliet. De uitdaging was om een open, lichte leefomgeving te creëren zonder de structurele integriteit van het huis aan te tasten.",
    solution: "We hebben niet-dragende muren verwijderd om een open concept te creëren en grotere raampartijen geïnstalleerd om meer natuurlijk licht binnen te laten. Een nieuwe keuken werd strategisch geplaatst als centraal punt voor het gezinsleven, met directe toegang tot de woonkamer en eetkamer.",
    materials: ["Eikenhouten vloeren", "Marmeren werkbladen", "Stalen kozijnen", "Messing accenten"],
    coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2858&auto=format&fit=crop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2074&auto=format&fit=crop",
        caption: "Lichte, open woonkamer met zicht op de tuin"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
        caption: "Moderne keuken met kookeiland"
      },
      {
        url: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop",
        caption: "Minimalistische slaapkamer met inloopkast"
      },
      {
        url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop",
        caption: "Badkamer met vrijstaand bad"
      }
    ],
    floorplans: [
      {
        title: "Vóór renovatie",
        image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?q=80&w=2069&auto=format&fit=crop"
      },
      {
        title: "Na renovatie",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    testimonial: {
      quote: "Guusje heeft onze woning volledig getransformeerd. Haar visie voor een open en lichte leefruimte heeft ons huis een compleet nieuwe energie gegeven. We zijn vooral onder de indruk van haar oog voor detail en hoe ze functionaliteit combineert met stijl.",
      author: "Familie Jansen"
    }
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const isMobile = useIsMobile();
  
  const project = id && projectData[id as keyof typeof projectData] 
    ? projectData[id as keyof typeof projectData]
    : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <h2 className="luxury-title text-center">Project niet gevonden</h2>
        </div>
      </main>
    );
  }
  
  return (
    <>
      {/* Hero Section */}
      <div 
        className="project-hero"
        style={{ backgroundImage: `url(${project.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
          <div className="container-custom pb-12 md:pb-16 lg:pb-20">
            <h1 className="luxury-title text-white mb-4">{project.title}</h1>
            <p className="luxury-subtitle text-white opacity-90">{project.subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="luxury-title mb-6">Over dit project</h2>
              <p className="mb-6">{project.description}</p>
              <div className="mb-8">
                <h3 className="font-serif text-2xl mb-4">De uitdaging</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-4">Onze oplossing</h3>
                <p>{project.solution}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 shadow-md self-start">
              <h3 className="font-serif text-xl mb-4">Projectdetails</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Locatie</p>
                  <p>{project.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Jaar</p>
                  <p>{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Categorie</p>
                  <p>{project.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Materialen</p>
                  <ul className="list-disc list-inside">
                    {project.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Before/After Floorplans */}
      <section className="section bg-offwhite">
        <div className="container-custom">
          <SectionTitle 
            title="Voor & Na"
            subtitle="Bekijk hoe we de ruimte hebben getransformeerd"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {project.floorplans.map((plan, index) => (
              <div key={index} className="bg-white p-4 shadow-md">
                <h4 className="font-serif text-xl mb-3">{plan.title}</h4>
                <div 
                  className="h-64 md:h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${plan.image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="section bg-cream">
        <div className="container-custom">
          <SectionTitle 
            title="Impressie"
            subtitle="Een visuele tour door het project"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {project.images.map((image, index) => (
              <div key={index} className="overflow-hidden shadow-md">
                <div 
                  className="project-gallery-item transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <p className="bg-white p-3 text-sm text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      {project.testimonial && (
        <section className="section bg-taupe">
          <div className="container-custom">
            <blockquote className="max-w-4xl mx-auto">
              <p className="quote text-center mb-6">"{project.testimonial.quote}"</p>
              <cite className="block text-center not-italic font-medium">
                — {project.testimonial.author}
              </cite>
            </blockquote>
          </div>
        </section>
      )}
      
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/31654994964`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contact via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "28"} height={isMobile ? "24" : "28"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
          <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z"/>
          <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z"/>
          <path d="M12 9.5c.5 0 1 .1 1 .5v1c0 .4-.5.5-1 .5s-1-.1-1-.5v-1c0-.4.5-.5 1-.5Z"/>
        </svg>
      </a>
    </>
  );
}
