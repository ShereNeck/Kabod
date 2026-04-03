import { motion } from "framer-motion";
import { Truck, Wrench, Car, BatteryCharging, ArrowRight } from "lucide-react";

export const servicesList = [
  {
    icon: <Truck size={40} />,
    title: "Remolque de Vehículos",
    desc: "Traslado seguro de todo tipo de autos, camionetas y vehículos pesados con grúas especializadas.",
    badge: "Más solicitado",
  },
  {
    icon: <Wrench size={40} />,
    title: "Auxilio Vial",
    desc: "Asistencia rápida para problemas mecánicos menores en carretera. Llegamos equipados.",
    badge: null,
  },
  {
    icon: <Car size={40} />,
    title: "Traslado de Autos",
    desc: "Plataformas especiales para llevar tu vehículo a otra ciudad de forma segura.",
    badge: null,
  },
  {
    icon: <BatteryCharging size={40} />,
    title: "Arranque de Batería",
    desc: "Paso de corriente seguro con equipos certificados para que continúes tu camino.",
    badge: "Rápido",
  },
];

export default function Services({ onOpenService }) {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-3"
          >
            Lo que hacemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2"
          >
            Nuestros <span className="text-primary">Servicios</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            La mejor tecnología en remolques a tu disposición. Haz clic en cualquier servicio para ver detalles y agendar.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <motion.button
              key={service.title}
              onClick={() => onOpenService(service)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="text-left bg-dark-elevated p-8 rounded-2xl border border-dark-border hover:border-primary transition-all group overflow-hidden relative cursor-pointer w-full"
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              )}

              {/* Background icon */}
              <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity transform group-hover:scale-110 duration-500 text-primary">
                <div style={{ fontSize: 80 }}>{service.icon}</div>
              </div>

              <div className="text-primary mb-6 transition-transform group-hover:-translate-y-1 duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>

              <div className="flex items-center gap-2 text-primary text-sm font-bold">
                <span>Ver detalles y agendar</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.button>
          ))}

          {/* CTA card */}
          <motion.a
            href="#booking"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: servicesList.length * 0.08 }}
            className="flex flex-col items-center justify-center bg-primary/10 border-2 border-dashed border-primary/40 hover:border-primary hover:bg-primary/20 transition-all rounded-2xl p-8 group cursor-pointer"
          >
            <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <Truck className="text-primary" size={36} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">¿Emergencia ahora?</h3>
            <p className="text-gray-400 text-sm text-center mb-4">
              Solicita una grúa de inmediato sin necesidad de seleccionar un servicio.
            </p>
            <span className="btn-primary py-2.5 px-6 text-sm">
              Solicitar ahora
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
