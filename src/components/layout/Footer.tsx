
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <img 
                src="/lovable-uploads/31876e33-aa33-4946-adde-bf2788078a9e.png" 
                alt="Interieur-Idee Logo" 
                className="h-10"
              />
            </div>
            <p className="text-sm mb-4">
              Als creatief bureau voor interieurarchitectuur realiseren wij doordachte ontwerpen voor
              zowel particuliere als zakelijke opdrachtgevers.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl mb-4">Contact</h4>
            <address className="not-italic text-sm">
              <p>vd Mastenstraat 11</p>
              <p>2611 NX Delft</p>
              <p className="mt-2">mb 06 54 994 964</p>
              <p className="mt-2">info@interieur-idee.nl</p>
            </address>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl mb-4">Menu</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="hover:text-taupe transition-colors">Home</Link>
              <Link to="/aanpak" className="hover:text-taupe transition-colors">Onze aanpak</Link>
              <Link to="/projecten" className="hover:text-taupe transition-colors">Projecten</Link>
              <Link to="/contact" className="hover:text-taupe transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl mb-4">Info</h4>
            <p className="text-sm mb-2">Kvk.nr. 27325511</p>
            <p className="text-sm mb-2">
              Guusje Bosman is sinds 1990 een gediplomeerd interieurarchitect en staat geregistreerd in het landelijk
              register voor interieurarchitecten.
            </p>
          </div>
        </div>
        
        <div className="border-t border-taupe border-opacity-20 pt-6">
          <p className="text-xs text-center">
            © {currentYear} Interieur-Idee | Fotografie: Barbra Verbij
          </p>
        </div>
      </div>
    </footer>
  );
}
