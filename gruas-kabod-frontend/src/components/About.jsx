import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Clock size={32} className="text-primary mb-4" />,
      title: "Misión",
      desc: "Brindar asistencia vial rápida y segura, rescatando a nuestros clientes de cualquier eventualidad con profesionalismo y eficacia, las 24 horas del día."
    },
    {
      icon: <Shield size={32} className="text-primary mb-4" />,
      title: "Visión",
      desc: "Ser la empresa líder en servicios de remolque a nivel regional, reconocida por nuestra puntualidad, cuidado vehicular y servicio al cliente inigualable."
    },
    {
      icon: <ThumbsUp size={32} className="text-primary mb-4" />,
      title: "Valores",
      desc: "Responsabilidad en cada traslado, rapidez ante la emergencia, y seguridad garantizada para usted y su patrimonio."
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-elevated">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2"
          >
            Sobre <span className="text-primary">Nosotros</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            En Grúas Kabod no solo movemos vehículos, brindamos tranquilidad en los momentos de mayor tensión. Con años de experiencia, nuestro equipo está capacitado para resolver cualquier situación vial.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 hover:border-primary/50 transition-colors group cursor-default"
            >
              <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                {card.icon}
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
