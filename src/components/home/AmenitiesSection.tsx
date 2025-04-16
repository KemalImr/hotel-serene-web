
import { 
  Utensils, 
  Coffee, 
  Wifi, 
  Car, 
  Dumbbell, 
  Waves, 
  Tv, 
  Wine, 
  Clock 
} from "lucide-react";

interface Amenity {
  icon: React.ElementType;
  title: string;
  description: string;
}

const AmenitiesSection = () => {
  const amenities: Amenity[] = [
    {
      icon: Utensils,
      title: "Gourmetrestaurant",
      description: "Unser preisgekröntes Restaurant serviert exquisite Gourmetküche."
    },
    {
      icon: Waves,
      title: "Innenpool",
      description: "Ein eleganter Innenpool mit Entspannungsbereich und Sauna."
    },
    {
      icon: Dumbbell,
      title: "Fitnesscenter",
      description: "Modernes Fitnesscenter mit hochwertigen Geräten."
    },
    {
      icon: Wifi,
      title: "Kostenloses WLAN",
      description: "Schnelles und zuverlässiges WLAN in allen Bereichen des Hotels."
    },
    {
      icon: Car,
      title: "Parkservice",
      description: "Bequemer Parkservice für alle Hotelgäste."
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Rezeptionsservice rund um die Uhr für Ihre Bedürfnisse."
    },
    {
      icon: Coffee,
      title: "Business Lounge",
      description: "Ruhige Business Lounge mit allem, was Sie zum Arbeiten brauchen."
    },
    {
      icon: Tv,
      title: "Smart-TV",
      description: "Alle Zimmer verfügen über Smart-TVs mit Premium-Kanälen."
    },
    {
      icon: Wine,
      title: "Weinbar",
      description: "Genießen Sie erlesene Weine in unserer stilvollen Bar."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-hotel-900 mb-4">
            Hotelausstattung
          </h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-hotel-700">
            Entdecken Sie unsere erstklassigen Annehmlichkeiten, die Ihren Aufenthalt im Hotel Serenity noch angenehmer machen.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:border-gold-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-gold-600 mb-4">
                <amenity.icon size={36} />
              </div>
              <h3 className="text-xl font-semibold text-hotel-800 mb-2">{amenity.title}</h3>
              <p className="text-hotel-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
