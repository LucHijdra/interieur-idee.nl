
import { useEffect } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-custom">
          <SectionTitle
            title="Contact"
            subtitle="Bent u benieuwd wat Interieur-Idee voor uw project kan betekenen? Neem gerust contact met ons op voor een vrijblijvend kennismakingsgesprek."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6">Contactgegevens</h3>
              <p className="mb-6">
                Wij denken graag met u mee en zetten samen de eerste
                stap richting een interieur dat volledig bij u past.
              </p>
              
              <div className="mb-8 flex items-start">
                <MapPin className="mr-2 mt-1 text-taupe" size={20} />
                <div>
                  <p className="font-medium mb-1">Adres</p>
                  <address className="not-italic">
                    <p>Interieur-Idee</p>
                    <p>vd Mastenstraat 11</p>
                    <p>2611 NX Delft</p>
                  </address>
                </div>
              </div>
              
              <div className="mb-8 space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-2 text-taupe" size={20} />
                  <div>
                    <p className="font-medium mb-1">Contact</p>
                    <p>06 54 994 964</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-taupe" size={20} />
                  <p>info@interieur-idee.nl</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/guusje bosman.png"
                alt="Guusje Bosman" 
                className="w-auto h-auto max-w-[300px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
