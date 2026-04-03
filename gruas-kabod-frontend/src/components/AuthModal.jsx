import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, User, Mail, Phone, Lock, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AuthModal({ onClose, onLogin }) {
  const [tab, setTab] = useState("login"); // "login" | "register"
  const [showPass, setShowPass] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    password: "",
    confirmar: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((p) => ({ ...p, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((p) => ({ ...p, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Credenciales incorrectas");
      setStatus("success");
      setTimeout(() => {
        onLogin(data.user);
        onClose();
      }, 1000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    if (registerData.password !== registerData.confirmar) {
      setStatus("error");
      setErrorMsg("Las contraseñas no coinciden.");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }
    try {
      const res = await fetch("/api/registro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: registerData.nombre,
          email: registerData.email,
          telefono: registerData.telefono,
          password: registerData.password,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Error al registrar");
      setStatus("success");
      setTimeout(() => {
        onLogin(data.user);
        onClose();
      }, 1200);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors text-sm";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-md bg-dark-elevated border border-dark-border rounded-2xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-dark border border-dark-border text-gray-400 hover:text-white hover:border-primary transition-colors"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="p-6 pb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
                <User className="text-primary" size={22} />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white">
                  {tab === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
                </h2>
                <p className="text-gray-500 text-xs">Grúas Kabod · Portal de Clientes</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-dark rounded-xl p-1 mb-6">
              {["login", "register"].map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setStatus("idle"); setErrorMsg(""); }}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    tab === t
                      ? "bg-primary text-black shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {t === "login" ? "Ingresar" : "Registrarse"}
                </button>
              ))}
            </div>
          </div>

          {/* Forms */}
          <div className="p-6 pt-0">
            <AnimatePresence mode="wait">
              {tab === "login" ? (
                <motion.form
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleLogin}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Correo electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input
                        name="email"
                        type="email"
                        required
                        value={loginData.email}
                        onChange={handleLoginChange}
                        placeholder="correo@ejemplo.com"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Contraseña</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input
                        name="password"
                        type={showPass ? "text" : "password"}
                        required
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="Tu contraseña"
                        className={`${inputClass} pl-9 pr-10`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                      >
                        {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="p-3 bg-red-500/20 border border-red-500/40 text-red-400 rounded-lg text-sm flex gap-2 items-center">
                      <AlertCircle size={15} /> {errorMsg}
                    </div>
                  )}
                  {status === "success" && (
                    <div className="p-3 bg-green-500/20 border border-green-500/40 text-green-400 rounded-lg text-sm flex gap-2 items-center">
                      <CheckCircle2 size={15} /> ¡Bienvenido de vuelta!
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="btn-primary w-full py-3.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                        Ingresando...
                      </span>
                    ) : "Iniciar Sesión"}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    ¿No tienes cuenta?{" "}
                    <button type="button" onClick={() => setTab("register")} className="text-primary font-bold hover:underline">
                      Regístrate gratis
                    </button>
                  </p>
                </motion.form>
              ) : (
                <motion.form
                  key="register"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleRegister}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Nombre completo</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input
                        name="nombre"
                        type="text"
                        required
                        value={registerData.nombre}
                        onChange={handleRegisterChange}
                        placeholder="Juan Pérez"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Correo electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input
                        name="email"
                        type="email"
                        required
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        placeholder="correo@ejemplo.com"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Teléfono</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                      <input
                        name="telefono"
                        type="tel"
                        required
                        value={registerData.telefono}
                        onChange={handleRegisterChange}
                        placeholder="+52 55 1234 5678"
                        className={`${inputClass} pl-9`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">Contraseña</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                          name="password"
                          type={showPass ? "text" : "password"}
                          required
                          minLength={6}
                          value={registerData.password}
                          onChange={handleRegisterChange}
                          placeholder="Mínimo 6 caracteres"
                          className={`${inputClass} pl-9`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">Confirmar</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                          name="confirmar"
                          type={showPass ? "text" : "password"}
                          required
                          value={registerData.confirmar}
                          onChange={handleRegisterChange}
                          placeholder="Repite la contraseña"
                          className={`${inputClass} pl-9`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="showPassR" onChange={() => setShowPass(!showPass)} className="accent-primary" />
                    <label htmlFor="showPassR" className="text-xs text-gray-400 cursor-pointer">Mostrar contraseña</label>
                  </div>

                  {status === "error" && (
                    <div className="p-3 bg-red-500/20 border border-red-500/40 text-red-400 rounded-lg text-sm flex gap-2 items-center">
                      <AlertCircle size={15} /> {errorMsg}
                    </div>
                  )}
                  {status === "success" && (
                    <div className="p-3 bg-green-500/20 border border-green-500/40 text-green-400 rounded-lg text-sm flex gap-2 items-center">
                      <CheckCircle2 size={15} /> ¡Cuenta creada! Bienvenido.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="btn-primary w-full py-3.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                        Registrando...
                      </span>
                    ) : "Crear Cuenta Gratis"}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    ¿Ya tienes cuenta?{" "}
                    <button type="button" onClick={() => setTab("login")} className="text-primary font-bold hover:underline">
                      Inicia sesión
                    </button>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
