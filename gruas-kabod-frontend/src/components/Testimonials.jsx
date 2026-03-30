import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Carlos Mendoza",
      date: "Hace 2 semanas",
      text: "Excelente servicio. Llegaron en 15 minutos en la madrugada. Trato muy amable y cuidaron mucho mi auto al subirlo a la plataforma.",
      rating: 5
    },
    {
      name: "Ana Sofía Ruiz",
      date: "Hace 1 mes",
      text: "Tuve un pequeño choque y estaba muy asustada, el operador fue muy profesional, me ayudó con el trámite y me llevó al taller de inmediato.",
      rating: 5
    },
    {
      name: "Roberto L.",
      date: "Hace 3 meses",
      text: "Cambiaron mi llanta muy rápido. El precio fue justo y no intentaron cobrarme de más por ser domingo. Recomendados 100%.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-dark pb-32">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2">
            Lo que dicen <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-body">
            Nuestra reputación se construye en cada traslado. Más de 5,000 clientes satisfechos respaldan nuestro servicio.
          </p>
        </div>

        {/* Carrusel simple / Grid (En una versión más compleja se usaría react-slick o swiper) */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-dark-border flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
