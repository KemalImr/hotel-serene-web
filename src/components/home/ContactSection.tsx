
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-hotel-900 mb-6">
              Kontaktieren Sie uns
            </h2>
            <div className="w-20 h-1 bg-gold-600 mb-8"></div>
            <p className="text-hotel-700 text-lg mb-8">
              Haben Sie Fragen oder möchten Sie eine Reservierung vornehmen? Füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hotel-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-hotel-700 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-hotel-700 mb-1">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Betreff Ihrer Nachricht"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-hotel-700 mb-1">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Ihre Nachricht"
                ></textarea>
              </div>
              
              <div>
                <Button className="bg-gold-600 hover:bg-gold-700 text-white w-full md:w-auto px-8">
                  Nachricht senden
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information and Map */}
          <div>
            <div className="mb-12">
              <h3 className="font-serif text-2xl font-bold text-hotel-900 mb-6">
                Kontaktinformationen
              </h3>
              
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gold-100 text-gold-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-hotel-800">Adresse</h4>
                    <p className="mt-1 text-hotel-600">Bahnhofstraße 123, 10115 Berlin</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gold-100 text-gold-600">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-hotel-800">Telefon</h4>
                    <p className="mt-1 text-hotel-600">+49 30 12345678</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gold-100 text-gold-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-hotel-800">E-Mail</h4>
                    <p className="mt-1 text-hotel-600">info@hotel-serenity.de</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map */}
            <div className="h-72 bg-gray-300 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654294306368!2d13.3888898!3d52.5218454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851da98f2c895%3A0x819a9082d57dc44b!2sBerlin%20Hauptbahnhof!5e0!3m2!1sen!2sde!4v1650294288305!5m2!1sen!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
