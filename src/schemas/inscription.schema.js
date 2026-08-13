import { z } from "zod";

const phoneRegex = /^[0-9+\-\s()]{9,11}$/;

export const inscriptionSchema = z.object({
  apellido: z
    .string()
    .trim()
    .min(2, "El apellido es obligatorio.")
    .max(16, "El apellido no puede tener más de 16 caracteres."),
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre es obligatorio.")
    .max(16, "El nombre no puede tener más de 16 caracteres."),
  email: z
    .string()
    .trim()
    .min(8, "El correo electrónico es obligatorio.")
    .email("Ingrese un correo electrónico válido."),
  institucion: z.string().optional(),
  cargo: z.string().optional(),
  telefono: z
    .string()
    .min(9, "El teléfono debe tener al menos 9 caracteres.")
    .max(11, "El teléfono no puede tener más de 11 caracteres."),
    // .refine(
    //   (value) => !value || phoneRegex.test(value),
    //   "Ingrese un teléfono válido."
    // ),
  provincia: z.string().optional(),
  observaciones: z.string().optional(),
});

export const inscriptionDefaultValues = {
  apellido: "",
  nombre: "",
  email: "",
  institucion: "",
  cargo: "",
  telefono: "",
  provincia: "",
  observaciones: ""
};
