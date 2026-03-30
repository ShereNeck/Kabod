import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, AlertCircle, Phone, Car, Info } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "",
    location: "",
    description: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulando llamada a API Laravel
    try {
      // await fetch('https://tu-api-laravel.com/api/solicitudes', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // Delay artificial
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus("success");
      setFormData({ name: "", phone: "", vehicleType: "", location: "", description: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="booking" className="section-padding relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CjxwYXRoIGQ9Ik0zNiAzNHYtbGgtMmwzLTMtMy0zdjFsLThoOHoiIGZpbGw9InJnYmEoMjUwLCAyMDQsIDIxLCAwLjA1KSIvPgo8L2c+Cjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto glass-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Lado izquierdo promocional */}
            <div className="bg-primary p-8 md:p-12 text-black flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4 bg-black/5 rounded-full blur-2xl w-64 h-64"></div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10 leading-tight">
                ¿Necesitas una grúa ahora?
              </h3>
              <p className="text-black/80 font-medium mb-8 text-lg relative z-10">
                Llena el formulario y una unidad saldrá inmediatamente hacia tu ubicación. 
              </p>
              
              <div className="space-y-6 relative z-10 font-bold">
                <div className="flex items-center gap-4 text-xl">
                  <Phone className="p-2 bg-black text-primary rounded-full" size={40} />
                  <span>+52 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4 text-xl">
                  <AlertCircle className="p-2 bg-black text-primary rounded-full" size={40} />
                  <span>Respuesta en menos de 10 seg</span>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-1" htmlFor="name">Nombre Completo</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                {/* Teléfono y Vehículo (Grid) */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1" htmlFor="phone">Número de Teléfono</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="Teléfono móvil"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1" htmlFor="vehicleType">Tipo de Vehículo</label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      required
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white appearance-none"
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Auto compacto">Auto compacto</option>
                      <option value="Camioneta / SUV">Camioneta / SUV</option>
                      <option value="Motocicleta">Motocicleta</option>
                      <option value="Vehículo pesado">Vehículo pesado</option>
                    </select>
                  </div>
                </div>

                {/* Ubicación */}
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-1" htmlFor="location">Ubicación Actual</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full bg-dark border border-dark-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                      placeholder="Calle, colonia o referencia"
                    />
                  </div>
                </div>

                {/* Problema */}
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-1" htmlFor="description">Descripción del Problema (Opcional)</label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none"
                    placeholder="Ej. Llanta pinchada, no arranca, accidente..."
                  ></textarea>
                </div>

                {/* Botón / Estados */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn-primary w-full py-4 text-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "idle" && (
                    <>
                      <Send size={20} />
                      Solicitar Servicio Ahora
                    </>
                  )}
                  {status === "loading" && (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      Enviando solicitud...
                    </span>
                  )}
                  {status === "success" && "¡Solicitud Recibida!"}
                  {status === "error" && "Error al enviar. Intente de nuevo."}
                </button>

                {/* Mensajes de feedback */}
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg text-sm font-medium flex gap-2 items-center"
                  >
                    <Info size={16} /> Una unidad ha sido asignada y te contactaremos en breve.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg text-sm font-medium flex gap-2 items-center"
                  >
                    <AlertCircle size={16} /> Hubo un problema de conexión. Por favor llama o usa WhatsApp.
                  </motion.div>
                )}

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
