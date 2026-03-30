import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/30 hover:bg-[#20b858] transition-colors flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={32} />
      
      {/* Tooltip visible on hover */}
      <span className="absolute right-full mr-4 bg-dark-elevated text-sm border border-dark-border text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        ¿Necesitas ayuda inmediata?
      </span>
      
      {/* Ping effect behind the button */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 hidden group-hover:block"></span>
    </motion.a>
  );
}
