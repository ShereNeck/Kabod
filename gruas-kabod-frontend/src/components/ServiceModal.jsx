import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Clock, Send, MapPin, AlertCircle, Info, ShieldCheck } from "lucide-react";
import { validateField, validateAll, RULES } from "../utils/validations";

const COOLDOWN_SEC = 30;

const serviceDetails = {
  "Remolque de Vehículos": {
    description:
      "Contamos con grúas de plataforma y tipo araña para el traslado seguro de todo tipo de vehículos. Nuestro equipo está capacitado para maniobrar en cualquier terreno sin dañar tu auto.",
    features: [
      "Autos compactos y sedán",
      "Camionetas y SUV",
      "Vehículos de lujo y deportivos",
      "Motocicletas",
      "Vehículos pesados (con cotización)",
    ],
    time: "15 – 30 min",
    price: "Desde $350 MXN",
  },
  "Auxilio Vial": {
    description:
      "Asistencia mecánica básica en carretera para sacarte del apuro sin necesidad de trasladar tu vehículo. Nuestros técnicos llegan equipados para resolver las fallas más comunes.",
    features: [
      "Diagnóstico básico en sitio",
      "Suministro de gasolina de emergencia",
      "Revisión y ajuste de frenos",
      "Asistencia en sobrecalentamiento",
      "Reporte de daños para aseguradora",
    ],
    time: "10 – 20 min",
    price: "Desde $200 MXN",
  },
  "Traslado de Autos": {
    description:
      "Plataformas especializadas para trasladar tu vehículo a cualquier destino de forma segura y puntual. Ideal para vehículos de colección, importaciones o traslados foráneos.",
    features: [
      "Traslados locales y foráneos",
      "Plataforma cerrada para autos de lujo",
      "Vehículos de colección o clásicos",
      "Importaciones y exportaciones",
      "Seguro de traslado incluido",
    ],
    time: "Cotización previa",
    price: "Cotización según destino",
  },
  "Arranque de Batería": {
    description:
      "Paso de corriente profesional y seguro con equipos de última generación. Evitamos daños al sistema eléctrico de tu vehículo con técnicas certificadas.",
    features: [
      "Diagnóstico de batería y alternador",
      "Paso de corriente seguro",
      "Carga de batería de emergencia",
      "Reemplazo de batería en sitio",
      "Revisión del sistema de carga",
    ],
    time: "5 – 15 min",
    price: "Desde $150 MXN",
  },
};

export default function ServiceModal({ service, onClose, user }) {
  const [formData, setFormData] = useState({
    name: user?.nombre || "",
    phone: user?.telefono || "",
    vehicleType: "",
    location: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [cooldown, setCooldown] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!service) return null;
  const details = serviceDetails[service.title] || {};

  const startCooldown = () => {
    let secs = COOLDOWN_SEC;
    setCooldown(secs);
    setStatus("cooldown");
    timerRef.current = setInterval(() => {
      secs -= 1;
      setCooldown(secs);
      if (secs <= 0) {
        clearInterval(timerRef.current);
        setStatus("idle");
        setCooldown(0);
      }
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "description" && value.length > RULES.description.max + 1) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, vehicleType: true, location: true, description: true });
    const allErrors = validateAll(formData);
    setErrors(allErrors);
    if (Object.values(allErrors).some(Boolean)) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/solicitudes.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          description: `[${service.title}] ${formData.description}`.trim(),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message);
      setStatus("success");

      // Notificar al operador por WhatsApp
      const msg =
        `NUEVA SOLICITUD DE GRUA\n\n` +
        `Servicio: ${service.title}\n` +
        `Nombre: ${formData.name}\n` +
        `Telefono: ${formData.phone}\n` +
        `Vehiculo: ${formData.vehicleType}\n` +
        `Ubicacion: ${formData.location}\n` +
        (formData.description ? `Descripcion: ${formData.description}\n` : "") +
        `\nSolicitud registrada desde domux.space`;
      window.open(`https://wa.me/50499202183?text=${encodeURIComponent(msg)}`, "_blank");

      setFormData({ name: "", phone: "", vehicleType: "", location: "", description: "" });
      setErrors({}); setTouched({});
      setTimeout(() => startCooldown(), 1500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-elevated border border-dark-border rounded-2xl shadow-2xl"
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-dark border border-dark-border text-gray-400 hover:text-white hover:border-primary transition-colors"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Left — details */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-dark-border">
              {/* Icon + title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/30 flex-shrink-0">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-extrabold text-white leading-tight">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                {details.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  ¿Qué incluye?
                </h4>
                <ul className="space-y-2">
                  {details.features?.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Time + Price */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark rounded-xl p-4 border border-dark-border">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Clock size={16} />
                    <span className="text-xs font-bold uppercase tracking-wide">Tiempo</span>
                  </div>
                  <p className="text-white font-extrabold">{details.time}</p>
                </div>
                <div className="bg-dark rounded-xl p-4 border border-dark-border">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="text-xs font-bold uppercase tracking-wide">Precio</span>
                  </div>
                  <p className="text-white font-extrabold">{details.price}</p>
                </div>
              </div>
            </div>

            {/* Right — booking form */}
            <div className="p-8">
              <h3 className="text-xl font-bold mb-1 text-white">Agendar Servicio</h3>
              <p className="text-xs text-gray-500 mb-5">Todos los campos marcados son obligatorios.</p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                {/* Nombre */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={RULES.name.max}
                      placeholder="Ej. Juan Pérez"
                      disabled={status === "loading" || status === "cooldown"}
                      className={`w-full bg-dark border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm ${touched.name && errors.name ? "border-red-500" : touched.name && !errors.name ? "border-green-500" : "border-dark-border focus:border-primary"}`}
                    />
                    {touched.name && !errors.name && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={14} />}
                  </div>
                  <AnimatePresence>
                    {touched.name && errors.name && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Teléfono + Vehículo */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={20}
                        placeholder="+504 0000-0000"
                        disabled={status === "loading" || status === "cooldown"}
                        className={`w-full bg-dark border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm ${touched.phone && errors.phone ? "border-red-500" : touched.phone && !errors.phone ? "border-green-500" : "border-dark-border focus:border-primary"}`}
                      />
                      {touched.phone && !errors.phone && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={13} />}
                    </div>
                    <AnimatePresence>
                      {touched.phone && errors.phone && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">
                      Vehículo <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === "loading" || status === "cooldown"}
                      className={`w-full bg-dark border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors text-sm appearance-none ${touched.vehicleType && errors.vehicleType ? "border-red-500" : touched.vehicleType && !errors.vehicleType ? "border-green-500" : "border-dark-border focus:border-primary"}`}
                    >
                      <option value="" disabled>Selecciona...</option>
                      <option value="Auto compacto">Auto compacto</option>
                      <option value="Camioneta / SUV">Camioneta / SUV</option>
                      <option value="Motocicleta">Motocicleta</option>
                      <option value="Vehículo pesado">Vehículo pesado</option>
                    </select>
                    <AnimatePresence>
                      {touched.vehicleType && errors.vehicleType && (
                        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.vehicleType}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Ubicación */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">
                    Ubicación Actual <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={15} />
                    <input
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={RULES.location.max}
                      placeholder="Calle, colonia o referencia"
                      disabled={status === "loading" || status === "cooldown"}
                      className={`w-full bg-dark border rounded-lg pl-9 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm ${touched.location && errors.location ? "border-red-500" : touched.location && !errors.location ? "border-green-500" : "border-dark-border focus:border-primary"}`}
                    />
                    {touched.location && !errors.location && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={13} />}
                  </div>
                  <AnimatePresence>
                    {touched.location && errors.location && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.location}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Descripción */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-semibold text-gray-400">Descripción <span className="text-gray-600">(opcional)</span></label>
                    <span className={`text-xs ${formData.description.length > RULES.description.max * 0.9 ? "text-yellow-500" : "text-gray-600"}`}>
                      {formData.description.length}/{RULES.description.max}
                    </span>
                  </div>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={RULES.description.max}
                    placeholder="Detalles del problema..."
                    disabled={status === "loading" || status === "cooldown"}
                    className={`w-full bg-dark border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm resize-none ${touched.description && errors.description ? "border-red-500" : "border-dark-border focus:border-primary"}`}
                  />
                  <AnimatePresence>
                    {touched.description && errors.description && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success" || status === "cooldown"}
                  className="btn-primary w-full py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "idle" && <><Send size={15} /> Confirmar Solicitud</>}
                  {status === "loading" && <span className="flex items-center gap-2 justify-center"><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" /> Enviando...</span>}
                  {status === "success" && <><CheckCircle2 size={15} /> ¡Solicitud Enviada!</>}
                  {status === "error" && "Error. Intente de nuevo."}
                  {status === "cooldown" && <span className="flex items-center gap-2 justify-center"><Clock size={15} /> Espera {cooldown}s</span>}
                </button>

                {/* Mensajes de estado */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-3 bg-green-500/15 border border-green-500/40 text-green-400 rounded-lg text-xs flex gap-2 items-start">
                      <Info size={14} className="flex-shrink-0 mt-0.5" /> Se abrió WhatsApp para notificar al operador. Te contactaremos pronto.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-3 bg-red-500/15 border border-red-500/40 text-red-400 rounded-lg text-xs flex gap-2 items-center">
                      <AlertCircle size={14} className="flex-shrink-0" /> Error de conexión. Llámanos al +504 9920-2183.
                    </motion.div>
                  )}
                  {status === "cooldown" && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-3 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-lg text-xs flex gap-2 items-center">
                      <ShieldCheck size={14} className="flex-shrink-0" /> Por seguridad espera {cooldown}s antes de enviar otra solicitud.
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
