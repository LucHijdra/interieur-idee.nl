
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
              
              <div>
                <p className="font-medium mb-1">KVK</p>
                <p>27325511</p>
              </div>
            </div>
            
            <div className="h-64 md:h-96 bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.6988185235585!2d4.353765900000001!3d51.999051300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5c1dcc4d58d%3A0x89b4fd41c4529137!2svan%20der%20Mastenstraat%2C%20Delft!5e0!3m2!1snl!2snl!4v1714059617410!5m2!1snl!2snl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Interieur-Idee"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
