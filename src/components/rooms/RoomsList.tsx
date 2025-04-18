
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Wifi, Coffee } from "lucide-react";

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
}

const RoomsList = () => {
  const rooms: Room[] = [
    {
      id: 1,
      name: "Classic Zimmer",
      description: "Unser Classic Zimmer bietet den perfekten Rahmen für einen komfortablen Aufenthalt mit stilvollem Ambiente.",
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="font-serif text-2xl">{room.name}</span>
                  <span className="text-gold-600 font-semibold">{room.price}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {room.size}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{room.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      {feature.icon}
                      {feature.text}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-hotel-800 hover:bg-hotel-900">
                  Details & Buchung
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsList;
