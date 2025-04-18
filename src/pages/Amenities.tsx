
import Layout from "@/components/layout/Layout";
import AmenitiesSection from "@/components/home/AmenitiesSection";

const Amenities = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-hotel-900 mb-6">
              Unsere Annehmlichkeiten
            </h1>
            <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-hotel-700">
              Entdecken Sie unsere exklusiven Annehmlichkeiten für einen unvergesslichen Aufenthalt im Hotel Serenity.
            </p>
          </div>
          <AmenitiesSection />
        </div>
      </div>
    </Layout>
  );
};

export default Amenities;
