import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2000&auto=format&fit=crop" 
          alt="Grúa en acción" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgMzloNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPgo8cGF0aCBkPSJNMCAwdjQwaDFWMHptMzkgMHY0MGgxVjB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container-custom relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-bold tracking-wide">DISPONIBLE 24/7 EN TU ZONA</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Servicio de <span className="text-primary">Grúas</span> 24/7
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
              Rápido, seguro y confiable en todo momento. Estamos listos para asistirte cuando más lo necesitas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#booking" className="btn-primary text-lg px-8 py-4">
                Solicitar grúa ahora
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                <MessageCircle size={24} />
                Contactar por WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                <span>Atención inmediata</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                <span>Seguridad garantizada</span>
              </div>
            </div>
          </motion.div>

          {/* Optional right side graphic or placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1628186103859-9da8c9913926?q=80&w=1000&auto=format&fit=crop" 
              alt="Grúa profesional" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border border-dark-border"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
