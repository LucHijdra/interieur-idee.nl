
import { useEffect } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import Quote from "@/components/shared/Quote";

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
            <div className="h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2092&auto=format&fit=crop')" }}></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="mb-6">Persoonlijke benadering</h2>
              <p className="mb-4">
                Bij Interieur-Idee staat uw visie en wensen centraal in ons ontwerpproces. Wij geloven dat een succesvol interieurontwerp voortkomt uit een nauwe samenwerking met de opdrachtgever.
              </p>
              <p>
                Onze aanpak is transparant en persoonlijk, met korte communicatielijnen en duidelijke afspraken. Deze werkwijze zorgt voor een prettig verloop van het traject en een eindresultaat waar u volledig tevreden mee bent.
              </p>
            </div>
            <div className="h-[400px] bg-cover bg-center lg:order-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop')" }}></div>
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
