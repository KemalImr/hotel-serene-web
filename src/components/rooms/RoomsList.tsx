
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Wifi, Coffee, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RoomFeature {
  icon: JSX.Element;
  text: string;
}

interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  size: string;
  image: string;
  features: RoomFeature[];
  longDescription: string;
}

const RoomsList = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const navigate = useNavigate();

  const rooms: Room[] = [
    {
      id: 1,
      name: "Classic Zimmer",
      description: "Unser Classic Zimmer bietet den perfekten Rahmen für einen komfortablen Aufenthalt.",
      longDescription: "Unser Classic Zimmer bietet den perfekten Rahmen für einen komfortablen Aufenthalt mit stilvollem Ambiente. Genießen Sie die moderne Ausstattung und die harmonische Atmosphäre. Das Zimmer verfügt über ein luxuriöses Kingsize-Bett, ein elegantes Badezimmer mit Regendusche und einen gemütlichen Sitzbereich.",
      price: "ab €199",
      size: "28m²",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: [
        { icon: <BedDouble className="h-5 w-5" />, text: "Kingsize-Bett" },
        { icon: <Bath className="h-5 w-5" />, text: "Luxusbad" },
        { icon: <Wifi className="h-5 w-5" />, text: "Kostenloses WLAN" },
        { icon: <Coffee className="h-5 w-5" />, text: "Kaffeemaschine" },
      ],
    },
    {
      id: 2,
      name: "Deluxe Suite",
      description: "Unsere Deluxe Suite vereint großzügigen Wohnraum mit exklusivem Design und bietet einen atemberaubenden Ausblick.",
      price: "ab €349",
      size: "45m²",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: [
        { icon: <BedDouble className="h-5 w-5" />, text: "Kingsize-Bett" },
        { icon: <Bath className="h-5 w-5" />, text: "Marmorbad" },
        { icon: <Wifi className="h-5 w-5" />, text: "Highspeed WLAN" },
        { icon: <Coffee className="h-5 w-5" />, text: "Nespresso Maschine" },
      ],
    },
    {
      id: 3,
      name: "Präsidenten Suite",
      description: "Die Präsidenten Suite verkörpert höchsten Luxus mit exklusivem Service und einzigartigem Panoramablick.",
      price: "ab €599",
      size: "85m²",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      features: [
        { icon: <BedDouble className="h-5 w-5" />, text: "Extra-King Bett" },
        { icon: <Bath className="h-5 w-5" />, text: "Spa-Badezimmer" },
        { icon: <Wifi className="h-5 w-5" />, text: "Premium WLAN" },
        { icon: <Coffee className="h-5 w-5" />, text: "Vollausgestattete Küche" },
      ],
    },
  ];

  const handleBookClick = () => {
    navigate("/booking");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Room List */}
          <div className="space-y-4">
            {rooms.map((room) => (
              <Card 
                key={room.id} 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedRoom?.id === room.id 
                    ? 'ring-2 ring-gold-500' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedRoom(room)}
              >
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-hotel-800 mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gold-600 font-semibold">{room.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Room Details */}
          <div className="md:col-span-2">
            {selectedRoom ? (
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="relative h-96 mb-6">
                    <img
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <h2 className="font-serif text-3xl font-bold text-hotel-800">
                        {selectedRoom.name}
                      </h2>
                      <p className="text-2xl font-bold text-gold-600">
                        {selectedRoom.price}
                      </p>
                    </div>
                    <p className="text-gray-600">{selectedRoom.longDescription}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedRoom.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600">
                          {feature.icon}
                          {feature.text}
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-gold-600 hover:bg-gold-700 text-white"
                      onClick={handleBookClick}
                    >
                      Jetzt Buchen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Bitte wählen Sie ein Zimmer aus der Liste aus, um Details anzuzeigen.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsList;
