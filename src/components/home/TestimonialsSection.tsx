
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Julia Schmidt",
      position: "Geschäftsreisende",
      content: "Hotel Serenity bietet einen erstklassigen Service und eine angenehme Atmosphäre für Geschäftsreisende. Die zentrale Lage war perfekt für meine Meetings in der Stadt.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Thomas Müller",
      position: "Urlauber",
      content: "Wir verbrachten einen wunderbaren Urlaub im Hotel Serenity. Die Zimmer sind elegant, das Essen köstlich und das Personal äußerst freundlich und zuvorkommend.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Maria Weber",
      position: "Event Planerin",
      content: "Die Konferenzräume und das Catering-Service des Hotels sind erstklassig. Unsere Firmenveranstaltung war ein voller Erfolg, auch dank der professionellen Unterstützung des Teams.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-20 bg-hotel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-hotel-900 mb-4">
            Was unsere Gäste sagen
          </h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-hotel-700">
            Entdecken Sie, was unsere geschätzten Gäste über ihren Aufenthalt im Hotel Serenity berichten.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-hotel-800">{testimonial.name}</h3>
                  <p className="text-hotel-500 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-hotel-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
