

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-dark-border">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img 
                src="/empresa_kabod.png" 
                alt="Grúas Kabod Logo" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white m-0 leading-tight">
                  Grúas Kabod
                </h3>
                <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                  Servicio de Remolque
                </span>
              </div>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Servicio de grúas y auxilio vial 24/7. Profesionales en el cuidado y traslado de tu vehículo con total seguridad garantizada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 bg-dark-elevated rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="h-10 w-10 bg-dark-elevated rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#coverage" className="text-gray-400 hover:text-primary transition-colors">Cobertura</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Remolque 24/7</li>
              <li className="text-gray-400">Paso de Corriente</li>
              <li className="text-gray-400">Cambio de Llanta</li>
              <li className="text-gray-400">Traslados Foráneos</li>
              <li className="text-gray-400">Maniobras de Rescate</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Grúas Kabod. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
