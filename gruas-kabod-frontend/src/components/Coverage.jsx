import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Coverage() {
  return (
    <section id="coverage" className="section-padding bg-dark-elevated">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2">
              Nuestra Zona de <span className="text-primary">Cobertura</span>
            </h2>
            <p className="text-body mb-8">
              Llegamos a donde nos necesites. Disponemos de una amplia red de grúas distribuidas estratégicamente para asegurar el menor tiempo de respuesta en la región.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Área Metropolitana y Centro de la ciudad",
                "Carreteras y Autopistas principales",
                "Zonas industriales y comerciales",
                "Traslados foráneos (previa cotización)"
              ].map((zone) => (
                <li key={zone} className="flex items-center gap-3 text-lg font-medium text-gray-300">
                  <span className="p-2 bg-primary/10 text-primary rounded-full">
                    <MapPin size={20} />
                  </span>
                  {zone}
                </li>
              ))}
            </ul>

            <div className="p-6 bg-dark border border-dark-border rounded-xl">
              <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Tiempo estimado de llegada:
              </h4>
              <p className="text-primary font-extrabold text-3xl">15 - 30 MINUTOS</p>
              <p className="text-sm text-gray-400 mt-1">*Sujeto a ubicación exacta y condiciones de tráfico.</p>
            </div>
          </motion.div>

          {/* Placeholder del mapa */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-dark-border relative group"
          >
            {/* Mapa visual estático temporal. En el futuro puede ser un iframe de Google Maps */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60 mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700"></div>
            
            {/* Puntos en el mapa simulados */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50 animate-bounce cursor-pointer">
                <MapPin className="text-black" size={24} />
              </div>
              <span className="mt-2 bg-black/80 px-3 py-1 rounded text-sm font-bold shadow">Nuestra Base Central</span>
            </div>
            
            <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="h-6 w-6 bg-primary/80 rounded-full flex items-center justify-center animate-pulse"></div>
            </div>

            <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="h-6 w-6 bg-primary/80 rounded-full flex items-center justify-center animate-pulse"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
