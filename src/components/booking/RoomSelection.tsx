
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check } from "lucide-react";

interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  size: number;
  images: string[];
  features: string[];
}

interface RoomSelectionProps {
  selectedRoom: string | null;
  onRoomSelect: (roomId: string) => void;
}

const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Zimmer",
    description: "Komfortables Zimmer mit allem, was Sie für einen angenehmen Aufenthalt benötigen.",
    price: 129,
    capacity: 2,
    size: 25,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070"
    ],
    features: ["Kingsize-Bett", "Klimaanlage", "Kostenloses WLAN", "Flachbild-TV", "Minibar"]
  },
  {
    id: "deluxe",
    name: "Deluxe Zimmer",
    description: "Geräumiges Zimmer mit zusätzlichem Komfort und Aussicht auf den Garten.",
    price: 189,
    capacity: 2,
    size: 35,
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070"
    ],
    features: ["Kingsize-Bett", "Klimaanlage", "Kostenloses WLAN", "42-Zoll-Smart-TV", "Minibar", "Espressomaschine", "Sitzbereich"]
  },
  {
    id: "suite",
    name: "Luxus Suite",
    description: "Unsere luxuriöseste Unterkunft mit separatem Wohnbereich und erstklassigen Annehmlichkeiten.",
    price: 299,
    capacity: 4,
    size: 55,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070"
    ],
    features: ["Kingsize-Bett", "Separates Wohnzimmer", "Klimaanlage", "Kostenloses WLAN", "55-Zoll-Smart-TV", "Minibar", "Espressomaschine", "Regendusche", "Bademäntel & Hausschuhe", "Toliettenartikel"]
  }
];

const RoomSelection = ({ selectedRoom, onRoomSelect }: RoomSelectionProps) => {
  const initialSelectedRoom = selectedRoom || rooms[0].id;
  const [selected, setSelected] = useState<string>(initialSelectedRoom);

  useEffect(() => {
    // Propagate the initially selected room to the parent component
    if (!selectedRoom) {
      onRoomSelect(initialSelectedRoom);
    }
  }, []);

  const handleRoomSelect = (roomId: string) => {
    setSelected(roomId);
    onRoomSelect(roomId);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-serif font-bold text-hotel-800">Wählen Sie Ihr Zimmer</h2>
      
      <p className="text-hotel-600">
        Wählen Sie eine unserer komfortablen Unterkünfte für Ihren Aufenthalt.
      </p>

      <div className="space-y-8">
        {rooms.map((room) => (
          <div 
            key={room.id} 
            className={`border rounded-lg overflow-hidden transition-all ${
              selected === room.id 
                ? "border-gold-500 ring-2 ring-gold-200" 
                : "border-gray-200 hover:border-gold-300"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-2">
                <Carousel className="w-full">
                  <CarouselContent>
                    {room.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div 
                            className="aspect-video w-full rounded-md overflow-hidden bg-cover bg-center" 
                            style={{ backgroundImage: `url(${image})` }}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-hotel-800">{room.name}</h3>
                  <p className="text-xl font-bold text-gold-600">€{room.price}<span className="text-sm font-normal text-hotel-600">/Nacht</span></p>
                </div>
                
                <p className="text-hotel-600 mb-4">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Größe:</span> {room.size} m²
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Kapazität:</span> {room.capacity} Personen
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="font-medium mb-2 text-hotel-700">Merkmale:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4 text-sm text-hotel-600">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-gold-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  type="button"
                  onClick={() => handleRoomSelect(room.id)}
                  className={`w-full py-2 rounded-md transition-colors ${
                    selected === room.id
                      ? "bg-gold-600 text-white"
                      : "border border-gold-600 text-gold-600 hover:bg-gold-50"
                  }`}
                >
                  {selected === room.id ? "Ausgewählt" : "Auswählen"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelection;
