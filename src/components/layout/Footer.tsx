
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hotel-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Hotel Serenity</h3>
            <p className="text-gray-300 mb-4">
              Luxuriöser Komfort und erstklassiger Service für Ihren unvergesslichen Aufenthalt.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Zimmer & Suiten
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Annehmlichkeiten
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-gold-400" />
                <span className="text-gray-300">Bahnhofstraße 123, 10115 Berlin</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-gold-400" />
                <span className="text-gray-300">+49 30 12345678</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-gold-400" />
                <span className="text-gray-300">info@hotel-serenity.de</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Abonnieren Sie unseren Newsletter für exklusive Angebote.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="px-4 py-2 bg-hotel-800 border border-hotel-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-600 hover:bg-gold-700 text-white rounded-md transition-colors"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-hotel-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hotel Serenity. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-gold-400">Datenschutz</Link>
            <Link to="/terms" className="text-gray-400 hover:text-gold-400">AGB</Link>
            <Link to="/imprint" className="text-gray-400 hover:text-gold-400">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
