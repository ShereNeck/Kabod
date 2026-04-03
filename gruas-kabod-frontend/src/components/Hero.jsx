import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, Star, Truck } from "lucide-react";

const stats = [
  { value: "24/7", label: "Disponibilidad" },
  { value: "+500", label: "Servicios al mes" },
  { value: "15min", label: "Tiempo respuesta" },
  { value: "100%", label: "Clientes satisfechos" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-elevated"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgMzloNDB2MUgweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIvPgo8cGF0aCBkPSJNMCAwdjQwaDFWMHptMzkgMHY0MGgxVjB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-40"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container-custom relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
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
              <a href="https://wa.link/j2rqin" target="_blank" rel="noreferrer" className="btn-whatsapp text-lg px-8 py-4">
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

          {/* Right — visual stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex flex-col gap-5 relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

            {/* Main card */}
            <div className="relative z-10 bg-dark-elevated border border-dark-border rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/30">
                  <Truck className="text-primary" size={36} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Grúas Kabod</h3>
                  <p className="text-primary text-sm font-semibold">Servicio Profesional de Remolque</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-primary fill-primary" />
                ))}
                <span className="ml-2 text-sm text-gray-400 font-medium">5.0 · Excelente servicio</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-dark rounded-xl p-4 border border-dark-border text-center">
                    <p className="text-primary font-extrabold text-3xl mb-1">{s.value}</p>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge */}
            <div className="relative z-10 flex items-center gap-4 bg-dark-elevated border border-primary/30 rounded-xl p-4 shadow-lg">
              <div className="h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-green-400" size={22} />
              </div>
              <div>
                <p className="text-white font-bold">Tiempo de respuesta promedio</p>
                <p className="text-primary font-extrabold text-lg">15 – 30 minutos</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
