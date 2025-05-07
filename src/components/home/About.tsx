export default function About() {
  return <section id="about" className="section bg-offwhite">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Over Interieur-Idee</h2>
            <p className="mb-4">
              Met een scherp oog voor esthetiek en
              functionaliteit vertalen wij uw wensen naar een
              interieur dat past bij uw levensstijl of
              merkidentiteit. Van woningen en woonarken tot
              horecazaken, kantoren en zorginstellingen.
            </p>
            <p className="mb-6">
              Wij creëren ruimtes die verrassen, verbinden en
              toekomstbestendig zijn.
            </p>
            <div>
              <p className="font-medium">Guusje Bosman</p>
              <p className="text-sm">
                Guusje Bosman is de interieurarchitect bij
                Interieur-Idee. Zij is sinds 1990 een
                gediplomeerd interieurarchitect en staat
                geregistreerd in het landelijk register voor
                interieurarchitecten.
              </p>
              <p className="mt-4 text-sm">+31654994964</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[300px] bg-cover bg-center" style={{
              backgroundImage: "url('/lovable-uploads/1.jpg')",
              aspectRatio: "9 / 16"
            }}></div>
          </div>
        </div>
      </div>
    </section>;
}