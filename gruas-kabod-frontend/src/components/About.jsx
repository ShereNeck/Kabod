import { motion } from "framer-motion";
import { Clock, Shield, ThumbsUp, CheckCircle2, Star, Users, Calendar } from "lucide-react";

const cards = [
  {
    icon: <Clock size={32} className="text-primary" />,
    title: "Misión",
    desc: "Brindar servicios rápidos, seguros y confiables para todo tipo de vehículos, atendiendo emergencias con atención personalizada, garantizando la satisfacción de nuestros clientes en cada servicio.",
  },
  {
    icon: <Star size={32} className="text-primary" />,
    title: "Visión",
    desc: "Ser la empresa de grúas más confiable y reconocida a nivel de Honduras, líder en innovación, eficiencia y atención al cliente.",
  },
  {
    icon: <ThumbsUp size={32} className="text-primary" />,
    title: "Compromiso",
    desc: "Nos dedicamos a ofrecer un servicio excepcional en cada atención, actuando con transparencia en tarifas y priorizando la protección de personas y vehículos.",
  },
];

const valores = [
  {
    icon: <Shield size={20} />,
    title: "Responsabilidad",
    desc: "Cumplimos con nuestros compromisos y horarios establecidos.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Seguridad",
    desc: "Priorizamos la protección de las personas y vehículos en cada servicio.",
  },
  {
    icon: <Clock size={20} />,
    title: "Puntualidad",
    desc: "Valoramos el tiempo de nuestros clientes y llegamos siempre a tiempo.",
  },
  {
    icon: <Star size={20} />,
    title: "Honestidad",
    desc: "Actuamos con transparencia en tarifas y servicios.",
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "Compromiso",
    desc: "Nos dedicamos a ofrecer un servicio excepcional en cada atención.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-elevated">
      <div className="container-custom">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-3"
          >
            Quiénes somos
          </motion.p>
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
            En Grúas Kabod no solo movemos vehículos, brindamos tranquilidad en los momentos de mayor tensión.
          </motion.p>
        </div>

        {/* Misión / Visión / Compromiso */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card p-8 hover:border-primary/50 transition-colors group"
            >
              <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Historia + Valores side by side */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Historia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Nuestra Historia</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-primary/30 space-y-8">
              {/* Hito 1 */}
              <div className="relative">
                <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full bg-primary border-2 border-dark-elevated"></div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">2024 — Fundación</span>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Grúas Kabod fue fundada por <span className="text-white font-semibold">Scarleth Jackeline Cardona</span> como una solución confiable para emergencias y traslados de vehículos en Honduras.
                </p>
              </div>

              {/* Hito 2 */}
              <div className="relative">
                <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full bg-primary border-2 border-dark-elevated"></div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Crecimiento</span>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Desde sus inicios, la empresa ha brindado rapidez, seguridad y atención personalizada a cada cliente, consolidándose como referente en el sector vial hondureño.
                </p>
              </div>

              {/* Hito 3 */}
              <div className="relative">
                <div className="absolute -left-[29px] top-1 h-4 w-4 rounded-full bg-primary/50 border-2 border-dark-elevated animate-pulse"></div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Hoy</span>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Operamos las 24 horas del día, los 7 días de la semana, con unidades equipadas y un equipo comprometido con llevar tranquilidad a cada cliente.
                </p>
              </div>
            </div>

            {/* Fundadora badge */}
            <div className="mt-8 flex items-center gap-4 p-4 bg-dark rounded-xl border border-dark-border">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 flex-shrink-0">
                <Users className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Fundadora</p>
                <p className="text-white font-bold">Scarleth Jackeline Cardona</p>
              </div>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Nuestros Valores</h3>
            </div>

            <div className="space-y-4">
              {valores.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-dark rounded-xl border border-dark-border hover:border-primary/50 transition-colors group"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold mb-0.5">{v.title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
