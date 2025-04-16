
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-hotel-900 mb-6">
              Über Hotel Serenity
            </h2>
            <div className="w-20 h-1 bg-gold-600 mb-8"></div>
            <p className="text-hotel-700 text-lg mb-6 leading-relaxed">
              Das Hotel Serenity wurde im Jahr 2010 gegründet und verkörpert den Inbegriff von Luxus und Eleganz. In unserer zentralen Lage im Herzen von Berlin bieten wir unseren Gästen ein unvergleichliches Erlebnis.
            </p>
            <p className="text-hotel-700 text-lg mb-8 leading-relaxed">
              Mit einer perfekten Mischung aus traditionellem Charme und modernem Komfort schafft unser Hotel eine einladende Atmosphäre für Geschäftsreisende und Urlauber gleichermaßen. Unsere engagierten Mitarbeiter stehen Ihnen rund um die Uhr zur Verfügung, um Ihren Aufenthalt zu einem unvergesslichen Erlebnis zu machen.
            </p>
            <Button className="bg-hotel-900 hover:bg-hotel-800 text-white">
              Mehr über uns
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80" 
                alt="Hotel Lobby" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold-100 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
