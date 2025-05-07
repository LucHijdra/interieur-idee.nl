export default function Philosophy() {
  return <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-xl">
            "In een interieur vind ik het belangrijk dat niet alles zo uit een showroom
            gehaald is. Juist de combinatie tussen oude, bestaande en nieuwe materialen maakt
            een ruimte spannend en meer eigen."
          </p>
        </div>
        
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
      </div>
    </section>;
}