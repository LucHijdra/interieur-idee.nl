import ReviewCard from "../shared/ReviewCard";

export default function Philosophy() {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Ontzorging van A tot Z</h3>
            <p className="text-sm">
              Wij begeleiden graag het volledige traject, van het eerste schetsontwerp tot en met
              de oplevering. Liever een deeltraject? Ook dat is mogelijk, zoals uitsluitend het
              ontwerp of enkel esthetische bouwbegeleiding.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Persoonlijk en helder contact</h3>
            <p className="text-sm">
              Tijdens het hele proces heeft u één vast
              aanspreekpunt. Iemand die niet alleen de planning en
              coördinatie bewaakt, maar ook helder en proactief met
              u communiceert.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Onafhankelijk en transparant</h3>
            <p className="text-sm">
              Wij kiezen leveranciers op basis van kwaliteit en prijs.
              Dankzij onze werkwijze met open begrotingen heeft u
              altijd volledig inzicht in de kosten, zonder verrassingen
              achteraf.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Gedreven door vakmanschap</h3>
            <p className="text-sm">
              Met meer dan dertig jaar ervaring combineren wij
              creativiteit met technische expertise. Elk ontwerp is
              functioneel, esthetisch en tot in detail doordacht.
            </p>
          </div>
        </div>

        {/* Kopersbegeleiding Section */}
        <div className="mt-24 flex flex-col md:flex-row items-center gap-12 bg-[#dedbd2] p-12 rounded-lg">
          <div className="w-full md:w-1/2">
            <img
              src="/public/lovable-uploads/Afbeelding6.png"
              alt="Kopersbegeleiding"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl mb-6">Kopersbegeleiding</h2>
            <p className="text-lg mb-4">
              Als ervaren kopersbegeleider staan wij klaar om u te ondersteunen bij elke stap van uw nieuwbouwproject. 
              Van het maken van de juiste keuzes voor uw woning tot het coördineren van het hele bouwproces.
            </p>
            <p className="text-lg mb-4">
              Wij zorgen ervoor dat al uw wensen op de juiste manier worden vertaald naar een praktische en 
              esthetische uitvoering, waarbij we rekening houden met zowel technische aspecten als uw persoonlijke voorkeuren.
            </p>
            <p className="text-lg">
              Door onze jarenlange ervaring en technische expertise kunt u vertrouwen op een vlot verlopend proces 
              en een eindresultaat dat perfect aansluit bij uw verwachtingen.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-serif mb-4 text-center">Wat onze klanten zeggen</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ontdek waarom onze klanten voor Interieur-Idee kiezen en hoe wij hun woondromen hebben gerealiseerd.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ReviewCard 
              text="De samenwerking ging eigenlijk vanzelf. Ik had mijn wensen maar geen idee hoe ik dit moest omzetten in een comfortabel drijvend paleis. Vanaf de 1e tekening zat Guus in de juiste richting. Het resultaat is inderdaad bijzonder verrassend, het is een juweeltje op het water geworden."
              author="Gerard Wielenga"
            />
            <ReviewCard 
              text="Guusje heeft heel goed inzicht in hoe je ruimtes goed kan indelen. Zelfs bij een gewoon standaard huis, heeft ze er iets bijzonders van gemaakt. Ze is ook praktisch en luistert goed naar wat jij wil. Dus haar eigen smaak, kennis en expertise combineert ze heel goed met de wensen van de klant."
              author="Nanette"
            />
            <ReviewCard 
              text="Fijn om met kennis en kunde te zijn bijgestaan bij het ontwerp van onze benedenverdieping. Naast voorstellen voor indeling en materialen heeft Interieur-Idee ook veel betekend in de realisatie van de verbouwing."
              author="familie uit Delft"
            />
            <ReviewCard 
              text="Door Guusje voelt het echt als 'thuiskomen'! Na onze begane grond verbouwing zijn we weer terug gekomen bij Guusje om onze badkamer te verbouwen. Ze werkt snel, netjes en denkt altijd mee aan creatieve ideeën!"
              author="Andy en Babiche"
            />
          </div>
        </div>
      </div>
    </section>
  );
}