export default function Philosophy() {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Volledige ontzorging van A tot Z</h3>
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
      </div>
    </section>
  );
}