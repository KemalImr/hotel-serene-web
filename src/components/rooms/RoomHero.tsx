
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RoomHero = () => {
  const navigate = useNavigate();
  
  const handleBookingClick = () => {
    navigate("/booking");
  };
  
  return (
    <section className="relative bg-gray-900 h-[60vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6">
          Unsere Zimmer & Suiten
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mb-8">
          Entdecken Sie unsere exklusiven Unterkünfte, die höchsten Komfort mit elegantem Design verbinden.
          Jedes Zimmer wurde sorgfältig gestaltet, um Ihnen einen unvergesslichen Aufenthalt zu garantieren.
        </p>
        <Button 
          onClick={handleBookingClick}
          className="w-fit bg-gold-600 hover:bg-gold-700 text-white"
        >
          Jetzt Buchen
        </Button>
      </div>
    </section>
  );
};

export default RoomHero;
