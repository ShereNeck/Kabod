// Reglas de validación compartidas para formularios de solicitud

export const RULES = {
  name: {
    min: 3,
    max: 80,
    pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ'\s]+$/,
  },
  phone: {
    min: 8,
    max: 20,
    pattern: /^[+]?[\d\s\-().]{8,20}$/,
  },
  location: {
    min: 5,
    max: 200,
  },
  description: {
    max: 400,
  },
};

// Detecta intentos de inyección básica (XSS / SQL)
const DANGEROUS = /<[^>]*>|script|SELECT|INSERT|DROP|--|\|\|/i;

export function validateField(name, value) {
  const v = value.trim();

  switch (name) {
    case "name": {
      if (!v) return "El nombre es obligatorio.";
      if (v.length < RULES.name.min)
        return `Mínimo ${RULES.name.min} caracteres.`;
      if (v.length > RULES.name.max)
        return `Máximo ${RULES.name.max} caracteres.`;
      if (!RULES.name.pattern.test(v))
        return "Solo se permiten letras y espacios.";
      if (DANGEROUS.test(v)) return "Texto no permitido.";
      return "";
    }
    case "phone": {
      if (!v) return "El teléfono es obligatorio.";
      const digits = v.replace(/\D/g, "");
      if (digits.length < 8) return "Mínimo 8 dígitos.";
      if (digits.length > 15) return "Máximo 15 dígitos.";
      if (!RULES.phone.pattern.test(v)) return "Formato de teléfono inválido.";
      return "";
    }
    case "vehicleType": {
      const valid = ["Auto compacto", "Camioneta / SUV", "Motocicleta", "Vehículo pesado"];
      if (!v) return "Seleccione un tipo de vehículo.";
      if (!valid.includes(v)) return "Opción no válida.";
      return "";
    }
    case "location": {
      if (!v) return "La ubicación es obligatoria.";
      if (v.length < RULES.location.min)
        return `Mínimo ${RULES.location.min} caracteres.`;
      if (v.length > RULES.location.max)
        return `Máximo ${RULES.location.max} caracteres.`;
      if (DANGEROUS.test(v)) return "Texto no permitido.";
      return "";
    }
    case "description": {
      if (v.length > RULES.description.max)
        return `Máximo ${RULES.description.max} caracteres.`;
      if (DANGEROUS.test(v)) return "Texto no permitido.";
      return "";
    }
    default:
      return "";
  }
}

export function validateAll(formData) {
  const errors = {};
  ["name", "phone", "vehicleType", "location", "description"].forEach((f) => {
    const e = validateField(f, formData[f] || "");
    if (e) errors[f] = e;
  });
  return errors;
}
