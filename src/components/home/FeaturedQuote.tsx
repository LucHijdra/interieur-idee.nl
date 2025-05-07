
import Quote from "../shared/Quote";

export default function FeaturedQuote() {
  return (
    <section className="section bg-taupe">
      <div className="container-custom">
        <Quote 
          text="Speciaal op maat gemaakte onderdelen zorgen dat lijnen doorlopen waardoor er meer samenhang is meer rust ontstaat."
          author="Guusje Bosman"
          className="text-charcoal"
        />
      </div>
    </section>
  );
}
