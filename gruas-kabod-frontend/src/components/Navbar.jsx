import { useState, useEffect } from "react";
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react";

export default function Navbar({ user, onOpenAuth, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    if (!userMenuOpen) return;
    const handler = () => setUserMenuOpen(false);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [userMenuOpen]);

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
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

          <div className="flex items-center gap-3">
            <a href="#booking" className="btn-primary py-2.5 px-5 text-sm">
              Solicitar grúa
            </a>

            {user ? (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border bg-dark-elevated hover:border-primary transition-colors text-sm font-medium"
                >
                  <div className="h-7 w-7 bg-primary/20 rounded-full flex items-center justify-center">
                    <User size={14} className="text-primary" />
                  </div>
                  <span className="text-white max-w-[100px] truncate">{user.nombre}</span>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-dark-elevated border border-dark-border rounded-xl shadow-2xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-dark-border">
                      <p className="text-white font-semibold text-sm truncate">{user.nombre}</p>
                      <p className="text-gray-500 text-xs truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => { onLogout(); setUserMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-dark hover:text-red-400 transition-colors"
                    >
                      <LogOut size={15} />
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dark-border bg-dark-elevated hover:border-primary transition-colors text-sm font-medium text-gray-300 hover:text-white"
              >
                <User size={16} className="text-primary" />
                Ingresar
              </button>
            )}
          </div>
        </nav>

        {/* Mobile buttons */}
        <div className="lg:hidden flex items-center gap-3">
          {user ? (
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-xs text-gray-400 border border-dark-border px-3 py-2 rounded-lg hover:border-red-500 hover:text-red-400 transition-colors"
            >
              <LogOut size={13} />
              Salir
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 text-xs text-gray-300 border border-dark-border px-3 py-2 rounded-lg hover:border-primary hover:text-white transition-colors"
            >
              <User size={13} className="text-primary" />
              Ingresar
            </button>
          )}
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-elevated border-b border-dark-border shadow-2xl">
          {user && (
            <div className="px-6 pt-4 pb-3 border-b border-dark-border flex items-center gap-3">
              <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                <User size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{user.nombre}</p>
                <p className="text-gray-500 text-xs">{user.email}</p>
              </div>
            </div>
          )}
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
