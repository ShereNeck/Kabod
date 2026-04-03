import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, AlertCircle, Phone, Info, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { validateField, validateAll, RULES } from "../utils/validations";

const COOLDOWN_SEC = 30; // segundos bloqueado tras envío exitoso

export default function BookingForm({ user }) {
  const [formData, setFormData] = useState({
    name: user?.nombre || "",
    phone: user?.telefono || "",
    vehicleType: "",
    location: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | cooldown
  const [cooldown, setCooldown] = useState(0);
  const timerRef = useRef(null);

  /* ---------- helpers ---------- */
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
    // Bloquear si ya excede el máximo de caracteres
    if (name === "description" && value.length > RULES.description.max + 1) return;
    setFormData((p) => ({ ...p, [name]: value }));
    if (touched[name]) {
      setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Marcar todos como tocados y validar
    const allTouched = { name: true, phone: true, vehicleType: true, location: true, description: true };
    setTouched(allTouched);
    const allErrors = validateAll(formData);
    setErrors(allErrors);
    if (Object.values(allErrors).some(Boolean)) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/solicitudes.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Error al enviar");

      setStatus("success");

      // Notificar al operador por WhatsApp
      const msg =
        `NUEVA SOLICITUD DE GRUA\n\n` +
        `Nombre: ${formData.name}\n` +
        `Telefono: ${formData.phone}\n` +
        `Vehiculo: ${formData.vehicleType}\n` +
        `Ubicacion: ${formData.location}\n` +
        (formData.description ? `Descripcion: ${formData.description}\n` : "") +
        `\nSolicitud registrada desde domux.space`;
      window.open(`https://wa.me/50499202183?text=${encodeURIComponent(msg)}`, "_blank");

      setFormData({ name: "", phone: "", vehicleType: "", location: "", description: "" });
      setErrors({});
      setTouched({});
      setTimeout(() => startCooldown(), 1500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  /* ---------- UI helpers ---------- */
  const fieldClass = (name) =>
    `w-full bg-dark border rounded-lg px-4 py-3 focus:outline-none transition-colors text-white placeholder-gray-600 text-sm ${
      touched[name] && errors[name]
        ? "border-red-500 focus:border-red-400"
        : touched[name] && !errors[name]
        ? "border-green-500 focus:border-green-400"
        : "border-dark-border focus:border-primary"
    }`;

  const isDisabled = status === "loading" || status === "success" || status === "cooldown";
  const descLen = formData.description.length;

  return (
    <section id="booking" className="section-padding relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CjxwYXRoIGQ9Ik0zNiAzNHYtbGgtMmwzLTMtMy0zdjFsLThoOHoiIGZpbGw9InJnYmEoMjUwLCAyMDQsIDIxLCAwLjA1KSIvPgo8L2c+Cjwvc3ZnPg==')] opacity-10" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto glass-card overflow-hidden">
          <div className="grid md:grid-cols-2">

            {/* Panel izquierdo */}
            <div className="bg-primary p-8 md:p-12 text-black flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  ¿Necesitas una grúa ahora?
                </h3>
                <p className="text-black/75 font-medium text-base mb-8">
                  Completa el formulario con tu información real y una unidad saldrá de inmediato hacia tu ubicación.
                </p>

                <div className="space-y-5 font-bold">
                  <div className="flex items-center gap-4 text-lg">
                    <Phone className="p-2 bg-black text-primary rounded-full flex-shrink-0" size={40} />
                    <span>+504 9920-2183</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <AlertCircle className="p-2 bg-black text-primary rounded-full flex-shrink-0" size={40} />
                    <span>Respuesta en menos de 10 seg</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <Clock className="p-2 bg-black text-primary rounded-full flex-shrink-0" size={40} />
                    <span>Llegada en 15 – 30 min</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 pt-8 border-t border-black/15">
                <div className="flex items-center gap-2 text-sm font-semibold text-black/70">
                  <ShieldCheck size={16} />
                  <span>Tus datos están seguros y solo serán usados para coordinar el servicio.</span>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="p-8 md:p-10">
              <h4 className="text-lg font-bold text-white mb-1">Solicitar servicio</h4>
              <p className="text-xs text-gray-500 mb-6">Todos los campos marcados son obligatorios.</p>

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
                      className={fieldClass("name")}
                      disabled={isDisabled}
                    />
                    {touched.name && !errors.name && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={16} />
                    )}
                  </div>
                  <AnimatePresence>
                    {touched.name && errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-400 text-xs mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={12} /> {errors.name}
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
                        className={fieldClass("phone")}
                        disabled={isDisabled}
                      />
                      {touched.phone && !errors.phone && (
                        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={14} />
                      )}
                    </div>
                    <AnimatePresence>
                      {touched.phone && errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center gap-1"
                        >
                          <AlertCircle size={12} /> {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">
                      Tipo de Vehículo <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${fieldClass("vehicleType")} appearance-none`}
                      disabled={isDisabled}
                    >
                      <option value="" disabled>Seleccione...</option>
                      <option value="Auto compacto">Auto compacto</option>
                      <option value="Camioneta / SUV">Camioneta / SUV</option>
                      <option value="Motocicleta">Motocicleta</option>
                      <option value="Vehículo pesado">Vehículo pesado</option>
                    </select>
                    <AnimatePresence>
                      {touched.vehicleType && errors.vehicleType && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-400 text-xs mt-1 flex items-center gap-1"
                        >
                          <AlertCircle size={12} /> {errors.vehicleType}
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
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={RULES.location.max}
                      placeholder="Calle, colonia o referencia clara"
                      className={`${fieldClass("location")} pl-9`}
                      disabled={isDisabled}
                    />
                    {touched.location && !errors.location && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={14} />
                    )}
                  </div>
                  <AnimatePresence>
                    {touched.location && errors.location && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-400 text-xs mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={12} /> {errors.location}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Descripción */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-semibold text-gray-400">
                      Descripción del Problema <span className="text-gray-600">(opcional)</span>
                    </label>
                    <span className={`text-xs ${descLen > RULES.description.max * 0.9 ? "text-yellow-500" : "text-gray-600"}`}>
                      {descLen}/{RULES.description.max}
                    </span>
                  </div>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={RULES.description.max}
                    placeholder="Ej. Llanta pinchada, no arranca, accidente..."
                    className={`${fieldClass("description")} resize-none`}
                    disabled={isDisabled}
                  />
                  <AnimatePresence>
                    {touched.description && errors.description && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-400 text-xs mt-1 flex items-center gap-1"
                      >
                        <AlertCircle size={12} /> {errors.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  disabled={isDisabled}
                  className="btn-primary w-full py-4 text-base mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "idle" && <><Send size={18} /> Solicitar Servicio Ahora</>}
                  {status === "loading" && (
                    <span className="flex items-center gap-2 justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black" />
                      Enviando solicitud...
                    </span>
                  )}
                  {status === "success" && <><CheckCircle2 size={18} /> ¡Solicitud Enviada!</>}
                  {status === "error" && "Error al enviar. Intente de nuevo."}
                  {status === "cooldown" && (
                    <span className="flex items-center gap-2 justify-center">
                      <Clock size={18} /> Podrás enviar otra en {cooldown}s
                    </span>
                  )}
                </button>

                {/* Mensajes de estado */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-green-500/15 border border-green-500/40 text-green-400 rounded-lg text-sm flex gap-2 items-start"
                    >
                      <Info size={15} className="flex-shrink-0 mt-0.5" />
                      <span>Solicitud registrada correctamente. Se ha abierto WhatsApp para notificar al operador. Te contactaremos en breve.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-red-500/15 border border-red-500/40 text-red-400 rounded-lg text-sm flex gap-2 items-center"
                    >
                      <AlertCircle size={15} className="flex-shrink-0" />
                      <span>Hubo un problema de conexión. Llámanos directamente al +504 9920-2183.</span>
                    </motion.div>
                  )}
                  {status === "cooldown" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 rounded-lg text-sm flex gap-2 items-center"
                    >
                      <ShieldCheck size={15} className="flex-shrink-0" />
                      <span>Por seguridad, espera {cooldown} segundo{cooldown !== 1 ? "s" : ""} antes de enviar otra solicitud.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
