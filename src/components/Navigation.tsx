import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hindinorthindianpandits@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Site 12, Parappana Agrahara, Bangalore-560100</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(+91) 9102416476</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-sacred-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron to-sacred-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🕉</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary">North Hindi Pandit</h2>
                <p className="text-sm text-muted-foreground">Hindi Pandits in Bangalore</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`font-medium transition-colors ${
                  isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`font-medium transition-colors ${
                  isActive("/blog") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Blog
              </Link>
              <Button variant="default" className="bg-gradient-to-r from-saffron to-sacred-red hover:opacity-90">
                <Phone className="h-4 w-4 mr-2" />
                Talk To Expert
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;