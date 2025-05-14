import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "@/components/shared/SectionTitle";
import { useIsMobile } from "@/hooks/use-mobile";

// Project data
const projectData = {
  "zondagsschool": {
    title: "Woning in voormalige zondagsschool",
    subtitle: "Transformatie van een historisch pand naar een eigentijdse woning",
    description: `Een voormalige zondagsschool uit 1952 is getransformeerd tot een comfortabele woning. Oorspronkelijk bestond het pand uit kantoor- en vergaderruimtes op de begane grond en een grote open ruimte op de verdieping, bereikbaar via binnen- en buitentrap. Het pand is met respect voor de oorspronkelijke structuur herbestemd tot een comfortabele en eigentijdse woning.`,
    challenge: `Het pand had een gesloten zijgevel, een ongelukkig geplaatste trap in een hoek en geen entree aan de straatzijde. Daarnaast ontbrak isolatie in vloer, dak en ramen en bestond de tuin volledig uit stoeptegels.`,
    solution: `Er zijn extra ramen in de zijgevel en dak geplaatst en de trap is centraal in de woning gebracht, wat een open indeling boven mogelijk maakte. De overloop fungeert nu als tweede zitkamer. Het verlaagde plafond is verwijderd en het dak is van buitenaf geïsoleerd, waardoor het originele dakbeschot zichtbaar is gebleven. Alle ramen en vloeren zijn vernieuwd en geïsoleerd. Op de begane grond is een nieuwe entree aan de straatzijde gerealiseerd, wat het pand een duidelijker aanzicht geeft. Tot slot zijn de stoeptegels in de tuin deels vervangen door gras, en zijn er tussenliggend klinkertjes geplaatst.`,
    details: {
      locatie: "Delft, centrum",
      jaar: "2013",
      oppervlak: "200 m2"
    }
  },
  "woonark": {
    title: "Woonark in het Spaarne",
    subtitle: "Een licht en flexibel ontwerp met verspringende niveaus",
    description: `Voor deze nieuwe woonark ontwierpen we een licht en open alternatief ter vervanging van een oudere ark met vaste maximale afmetingen. Het nieuwe ontwerp speelt in op de wens voor een licht, ruimtelijk en flexibel geheel.`,
    challenge: `Hoewel de ark bedoeld is voor één persoon, bleek een anderhalf-laagse opzet financieel gunstiger. De wens was een ruimtelijk, loftachtig gevoel en geen gang met kleine kamers. Functionele eisen waren o.a. een entree op kadeniveau, een terras maximaal 40 cm boven het water en een directe verbinding tussen eetkamer en terras.`,
    solution: `Door verschillende niveaus te laten verspringen met telkens 40 cm, ontstonden logische overgangen. De entree en slaapkamer op kadeniveau, keuken en terras iets lager, de zitkamer op waterniveau. Beneden wordt twee derde van de ruimte benut als woonverdieping, de rest als berging. Beneden zijn de ramen in de slaapkamers boven het betonnen casco geplaatst, wat resulteert in verhoogde kozijnen met daglichttoetreding van bovenaf. De uitspringende koven die hierdoor boven ontstaan, worden daar als zitbanken gebruikt. De indeling is flexibel, twee slaapkamers zijn eenvoudig samen te voegen tot één royale ruimte.`,
    details: {
      locatie: "Haarlem, Spaarne",
      jaar: "2021",
      oppervlak: "150 m2"
    }
  },
  "brandweerkazerne": {
    title: "Projectinrichting en kleuradvies brandweerkazerne",
    subtitle: "Een tweede thuis voor drie brandweerteams",
    description: `Voor de nieuwe kazerne was nog geen kleur- en materiaalplan opgesteld voor het vaste en losse meubilair, evenals de stoffering. De opdracht richtte zich op de inrichting van diverse ruimten, waaronder de entree, zitkamer, woonkeuken, slaapkamers, kantoren en leslokalen.`,
    challenge: `Binnen de kazerne werken drie teams in ploegendienst. Omdat de kazerne fungeert als hun tweede thuis, was het essentieel dat alle teams zich prettig voelen in de ruimtes ondanks uiteenlopende voorkeuren. Met name het zitcomfort en de robuustheid van de relaxstoelen in de zitkamer waren cruciaal. Daaruit moest men snel kunnen opstaan bij een noodoproep.`,
    solution: `Door vanaf de start alle teams actief te betrekken bij het ontwerpproces, ontstond er draagvlak voor een gezamenlijke visie. De gekozen kleuren en materialen sloten aan op het bestaande architectonisch ontwerp, zodat een harmonieus geheel ontstond. Na het testen van diverse modellen, kozen de teams unaniem voor een relaxstoel met vier poten en een los voetenbankje, uitgevoerd in vier kleuren kunstleer. Daarnaast kregen persoonlijke elementen een plek in het ontwerp. Ingezonden foto’s van medewerkers werden verwerkt tot fotobehang op meerdere locaties in het gebouw.`,
    details: {
      locatie: "Rotterdam, RTHA",
      jaar: "2020",
      oppervlak: null
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
          <h2 className="text-3xl font-serif text-left">Project niet gevonden</h2>
        </div>
      </main>
    );
  }
  
  return (
    <>
      {/* Hero Section */}
      <div className="pt-32 pb-12 bg-cream">
        <div className="container-custom">
          <h1 className="text-4xl font-serif mb-4 text-left">{project.title}</h1>
          <p className="text-xl opacity-90 text-left">{project.subtitle}</p>
        </div>
      </div>
      
      {/* Project Info */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6 text-left">Over dit project</h2>
              <p className="mb-6">{project.description}</p>
              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-4 text-left">De uitdaging</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4 text-left">Onze oplossing</h3>
                <p>{project.solution}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 shadow-md self-start">
              <h3 className="text-2xl font-serif mb-4 text-left">Projectdetails</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Locatie</p>
                  <p>{project.details.locatie}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Jaar</p>
                  <p>{project.details.jaar}</p>
                </div>
                {project.details.oppervlak && (
                  <div>
                    <p className="text-sm text-gray-500">Oppervlak</p>
                    <p>{project.details.oppervlak}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impressie (placeholder) */}
      <section className="section bg-cream">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-8 text-left">Impressie</h2>
          <p className="text-gray-600 mb-8 text-left">Beeldmateriaal volgt binnenkort.</p>
        </div>
      </section>
      
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
