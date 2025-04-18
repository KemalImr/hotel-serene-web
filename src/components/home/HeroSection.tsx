
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-black h-[80vh]">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          opacity: 0.7
        }}
      />
      
      {/* Content */}
      <div className="relative flex items-center justify-center h-full z-10">
        <div className="text-center p-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Willkommen im Hotel Serenity
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Erleben Sie erstklassigen Luxus und außergewöhnlichen Service im Herzen von Berlin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-6 text-lg">
              Zimmer Buchen
            </Button>
            <Button className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-6 text-lg">
              Mehr Erfahren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
