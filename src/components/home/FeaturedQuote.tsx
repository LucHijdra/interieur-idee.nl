import Quote from "../shared/Quote";

export default function FeaturedQuote() {
  return (
    <section className="section bg-taupe">
      <div className="container-custom">
        <Quote 
          text="In een interieur vind ik het belangrijk dat niet alles zo uit een showroom gehaald is. Juist de combinatie tussen oude, bestaande en nieuwe materialen maakt een ruimte spannend en meer eigen."
          author="Guusje Bosman"
          className="text-charcoal italic"
        />
      </div>
    </section>
  );
}
