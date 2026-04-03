import { Mail, MapPin, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-elevated">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="heading-2">Atención <span className="text-primary">al Cliente</span></h2>
            <p className="text-body mb-8">
              Contamos con central de despacho disponible todo el año. Llámanos o envíanos un mensaje, resolveremos tus dudas y acudiremos en tu ayuda.
            </p>

            <div className="space-y-6">
              <a href="tel:+50499202183" className="flex items-center gap-4 group p-4 border border-dark-border rounded-xl hover:border-primary transition-colors">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <PhoneCall size={28} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-semibold mb-1">Línea de Emergencia 24/7</span>
                  <span className="font-bold text-2xl group-hover:text-primary transition-colors">+504 9920-2183</span>
                </div>
              </a>

              <a href="mailto:emilioarg355@gmail.com" className="flex items-center gap-4 group p-4 border border-dark-border rounded-xl hover:border-primary transition-colors">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-semibold mb-1">Correo Electrónico</span>
                  <span className="font-bold text-xl group-hover:text-primary transition-colors">emilioarg355@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-dark-border rounded-xl">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-semibold mb-1">Dirección</span>
                  <span className="font-bold text-xl">La Cañada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-dark-border shadow-xl">
            <iframe
              title="Ubicación Grúas Kabod - La Cañada"
              src="https://maps.google.com/maps?q=La+Ca%C3%B1ada+Honduras&output=embed&z=14"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
