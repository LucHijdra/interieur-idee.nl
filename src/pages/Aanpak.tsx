import { useEffect } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import Quote from "@/components/shared/Quote";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Aanpak() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-custom">
          <SectionTitle
            title="Onze aanpak"
            subtitle="We starten altijd met een vrijblijvend intakegesprek, waarin we uw behoeften, stijl en budget gezamenlijk verkennen."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4">
                Interieur-Idee is specialist in het (bouwkundig) herindeling van ruimtes die niet
                altijd zeer ingrijpend hoeft te zijn voor een maximaal resultaat. Soms is het
                omzetten van een wandje of het verplaatsen van een deur al voldoende voor een
                verbluffend effect.
              </p>
              <p>
                Na een grondige inventarisatie van uw wensen starten we met het schetsontwerp.
                Indien gewenst visualiseren we dit ontwerp in 3D, zodat u direct een realistisch
                beeld krijgt van het beoogde resultaat.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="h-[500px] bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('/lovable-uploads/Afbeelding9 - Bewerkt.png')" }}></div>
              <p className="mt-4 text-center text-sm">Plattegrond bestaande situatie & Plattegrond gewijzigde situatie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-custom">
          <SectionTitle 
            title="Onze werkwijze in drie overzichtelijke stappen"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 relative">
              <div className="absolute top-0 left-0 bg-taupe text-white w-12 h-12 flex items-center justify-center font-serif text-xl">
                1
              </div>
              <h3 className="mb-4 mt-6">Ontwerp</h3>
              <p className="text-sm mb-4">
                In deze fase vertalen we uw wensen naar een doordacht ontwerp.
              </p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Schetsontwerp, de eerste creatieve vertaling van uw ideeën</li>
                <li>Voorlopig ontwerp, verdere uitwerking inclusief materiaal- en indelingsvoorstellen</li>
                <li>Definitief ontwerp, een volledig uitgewerkt plan, klaar voor realisatie</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 relative">
              <div className="absolute top-0 left-0 bg-taupe text-white w-12 h-12 flex items-center justify-center font-serif text-xl">
                2
              </div>
              <h3 className="mb-4 mt-6">Procedures</h3>
              <p className="text-sm mb-4">
                We begeleiden u bij alle noodzakelijke stappen richting uitvoering.
              </p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Bouwaanvraag, indien nodig verzorgen wij alle benodigde vergunningsaanvragen</li>
                <li>Bouwvoorbereiding, van technische tekeningen tot het selecteren van uitvoerende partijen</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 relative">
              <div className="absolute top-0 left-0 bg-taupe text-white w-12 h-12 flex items-center justify-center font-serif text-xl">
                3
              </div>
              <h3 className="mb-4 mt-6">Bouwuitvoering</h3>
              <p className="text-sm mb-4">
                Tijdens de uitvoering blijven wij nauw betrokken om kwaliteit en visie te waarborgen.
              </p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Directievoering, we coördineren de werkzaamheden en bewaken de planning</li>
                <li>Esthetische begeleiding, we zorgen ervoor dat het ontwerp tot in detail wordt gerealiseerd zoals bedoeld</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          {/* Desktop view - static images */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {['/lovable-uploads/3.jpg', '/lovable-uploads/9.jpg', '/lovable-uploads/14.jpg'].map((image, index) => (
              <div key={index} className="relative w-full pb-[177.78%]">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${image}')` }}
                ></div>
              </div>
            ))}
          </div>

          {/* Mobile view - carousel */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {['/lovable-uploads/3.jpg', '/lovable-uploads/9.jpg', '/lovable-uploads/14.jpg'].map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full pb-[177.78%]">
                      <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${image}')` }}
                      ></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <CarouselPrevious />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <Quote 
        text="Juist de combinatie tussen oude, bestaande en nieuwe materialen maakt een ruimte spannend en meer eigen."
        author="Guusje Bosman"
        className="bg-cream"
      />
    </main>
  );
}
