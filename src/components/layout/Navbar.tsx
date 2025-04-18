import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold text-hotel-800">
                Hotel Serenity
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-hotel-600 hover:text-gold-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-hotel-600 hover:text-gold-600 transition-colors">
              Über uns
            </Link>
            <Link to="/rooms" className="font-medium text-hotel-600 hover:text-gold-600 transition-colors">
              Zimmer & Suiten
            </Link>
            <Link to="/amenities" className="font-medium text-hotel-600 hover:text-gold-600 transition-colors">
              Annehmlichkeiten
            </Link>
            <Link to="/contact" className="font-medium text-hotel-600 hover:text-gold-600 transition-colors">
              Kontakt
            </Link>
            <Button 
              className="bg-gold-600 hover:bg-gold-700 text-white"
              onClick={handleBookingClick}
            >
              Jetzt Buchen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-hotel-500 hover:text-gold-600 hover:bg-gray-100"
            >
              <span className="sr-only">Menü öffnen</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-hotel-600 hover:bg-gray-50 hover:border-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-hotel-600 hover:bg-gray-50 hover:border-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              to="/rooms"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-hotel-600 hover:bg-gray-50 hover:border-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Zimmer & Suiten
            </Link>
            <Link
              to="/amenities"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-hotel-600 hover:bg-gray-50 hover:border-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Annehmlichkeiten
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-hotel-600 hover:bg-gray-50 hover:border-gold-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="pl-3 pr-4 py-2">
              <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white">
                Jetzt Buchen
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
