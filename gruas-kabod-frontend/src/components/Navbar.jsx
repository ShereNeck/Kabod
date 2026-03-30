import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Cobertura", href: "#coverage" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="/empresa_kabod.png" 
            alt="Grúas Kabod Logo" 
            className="h-10 w-auto md:h-12 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-white m-0 leading-tight">
              Grúas Kabod
            </h1>
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              Servicio de Remolque
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#booking" className="btn-primary py-2.5 px-5 text-sm">
            Solicitar grúa
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-elevated border-b border-dark-border shadow-2xl">
          <ul className="flex flex-col py-4 px-6 space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-gray-300 hover:text-primary font-medium text-lg py-2 border-b border-dark-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a 
                href="#booking" 
                className="btn-primary w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar grúa
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
