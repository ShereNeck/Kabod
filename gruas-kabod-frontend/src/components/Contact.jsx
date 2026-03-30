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
              <a href="tel:+521234567890" className="flex items-center gap-4 group p-4 border border-dark-border rounded-xl hover:border-primary transition-colors">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <PhoneCall size={28} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-semibold mb-1">Línea de Emergencia 24/7</span>
                  <span className="font-bold text-2xl group-hover:text-primary transition-colors">+52 123 456 7890</span>
                </div>
              </a>

              <a href="mailto:contacto@gruaskabod.com" className="flex items-center gap-4 group p-4 border border-dark-border rounded-xl hover:border-primary transition-colors">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-semibold mb-1">Correo Electrónico</span>
                  <span className="font-bold text-xl group-hover:text-primary transition-colors">contacto@gruaskabod.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-dark-border rounded-xl">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400 font-semibold mb-1">Oficina Central</span>
                  <span className="font-bold text-xl">Av. Principal 123, Colonia Centro.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px] w-full bg-dark rounded-2xl border border-dark-border flex items-center justify-center overflow-hidden">
             {/* Un mapa embebido o un placeholder visual */}
             <div className="text-center p-8">
               <h3 className="text-2xl font-bold mb-4">Ubicación estratégica</h3>
               <p className="text-gray-400">Nuestro patio de maniobras nos permite tener salidas rápidas a las principales arterias de la ciudad.</p>
               <div className="mt-8 relative w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-black/50 border border-dark-border">
                  <span className="text-primary/50 text-sm">Mapa Referencial</span>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
