import { motion } from "framer-motion";
import { Truck, Wrench, Car, BatteryCharging, CircleDot } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: <Truck size={48} />,
      title: "Remolque de Vehículos",
      desc: "Traslado seguro de todo tipo de autos, camionetas y vehículos pesados."
    },
    {
      icon: <Wrench size={48} />,
      title: "Auxilio Vial",
      desc: "Asistencia rápida para problemas mecánicos menores en carretera."
    },
    {
      icon: <Car size={48} />,
      title: "Traslado de Autos",
      desc: "Servicio de madrina o plataformas especiales para llevar tu vehículo a otra ciudad."
    },
    {
      icon: <BatteryCharging size={48} />,
      title: "Arranque de Batería",
      desc: "Paso de corriente seguro para que continúes tu camino sin demoras."
    },
    {
      icon: <CircleDot size={48} />,
      title: "Cambio de Llantas",
      desc: "Sustitución rápida de neumáticos pinchados por tu llanta de refacción."
    }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            La mejor tecnología en remolques a tu disposición para garantizar el cuidado e integridad de tu vehículo.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="bg-dark-elevated p-8 rounded-2xl border border-dark-border hover:border-primary transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-500">
                {service.icon}
              </div>
              
              <div className="text-primary mb-6 transition-transform group-hover:-translate-y-2 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
