import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Coverage from "./components/Coverage";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ServiceModal from "./components/ServiceModal";
import AuthModal from "./components/AuthModal";

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("kabod_user")) || null;
    } catch {
      return null;
    }
  });

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("kabod_user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("kabod_user");
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-black overflow-x-hidden">
      <Navbar
        user={user}
        onOpenAuth={() => setAuthModalOpen(true)}
        onLogout={handleLogout}
      />
      <main>
        <Hero />
        <About />
        <Services onOpenService={setSelectedService} />
        <Coverage />
        <BookingForm user={user} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          user={user}
        />
      )}

      {authModalOpen && (
        <AuthModal
          onClose={() => setAuthModalOpen(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;
