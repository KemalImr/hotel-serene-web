
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const RoomShowcase = () => {
  const featuredRooms: Room[] = [
    {
      id: 1,
      name: "Deluxe Doppelzimmer",
      description: "Elegant eingerichtetes Zimmer mit Kingsize-Bett und Stadtblick.",
      price: "ab €199 pro Nacht",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "Executive Suite",
      description: "Geräumige Suite mit separatem Wohnbereich und luxuriösem Badezimmer.",
      price: "ab €349 pro Nacht",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      name: "Präsidenten Suite",
      description: "Unsere exklusivste Unterkunft mit spektakulärem Panoramablick und erstklassigem Service.",
      price: "ab €599 pro Nacht",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-hotel-900 mb-4">
            Unsere Exklusiven Zimmer
          </h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-hotel-700">
            Entdecken Sie unsere eleganten Zimmer und Suiten, die mit modernsten Annehmlichkeiten ausgestattet sind, um Ihnen einen komfortablen und luxuriösen Aufenthalt zu garantieren.
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-64">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-serif text-xl font-bold text-hotel-800 mb-2">{room.name}</h3>
                <p className="text-hotel-600 mb-4">{room.description}</p>
                <p className="text-gold-600 font-semibold mt-auto">{room.price}</p>
              </div>
              <div className="px-6 pb-6 pt-0">
                <Button className="w-full bg-hotel-800 hover:bg-hotel-900 text-white flex items-center justify-center">
                  Details Ansehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-transparent hover:bg-gold-50 text-gold-600 border border-gold-600 px-8">
            Alle Zimmer & Suiten Ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;
