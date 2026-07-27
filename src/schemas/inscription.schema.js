import { z } from "zod";

const phoneRegex = /^[0-9+\-\s()]{9,11}$/;

export const inscriptionSchema = z.object({
  apellido: z
    .string()
    .trim()
    .min(1, "El apellido es obligatorio."),
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio."),
  email: z
    .string()
    .trim()
    .min(1, "El correo electrónico es obligatorio.")
    .email("Ingrese un correo electrónico válido."),
  institucion: z.string().optional(),
  cargo: z.string().optional(),
  telefono: z
    .string()
    .optional()
    .refine(
      (value) => !value || phoneRegex.test(value),
      "Ingrese un teléfono válido."
    ),
  provincia: z.string().optional(),
});

export const inscriptionDefaultValues = {
  apellido: "",
  nombre: "",
  email: "",
  institucion: "",
  cargo: "",
  telefono: "",
  provincia: "",
};
