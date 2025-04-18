
import Layout from "@/components/layout/Layout";
import ContactSection from "@/components/home/ContactSection";

const Contact = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-hotel-900 mb-6">
              Kontaktieren Sie uns
            </h1>
            <div className="w-20 h-1 bg-gold-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-hotel-700">
              Haben Sie Fragen oder möchten Sie weitere Informationen? Kontaktieren Sie uns noch heute.
            </p>
          </div>
          <ContactSection />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
