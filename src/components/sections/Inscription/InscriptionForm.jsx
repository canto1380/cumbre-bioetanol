import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import Button from "../../ui/Buttons/Button";
import { registerInscription } from "../../../services/googleSheet-service";
import { LoadingOverlay } from "../../Commons/Loading/Loading";
import { ResultModal } from "../../Modals/Modal";
import {
  inscriptionDefaultValues,
  inscriptionSchema,
} from "../../../schemas/inscription.schema";

function FieldError({ message }) {
  if (!message) return null;

  return <span className="bio-form-error">{message}</span>;
}

export function InscriptionForm() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    status: "",
    title: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(inscriptionSchema),
    defaultValues: inscriptionDefaultValues,
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await registerInscription(data);
      const responseJSON = JSON.parse(response);

      if (responseJSON.success) {
        reset(inscriptionDefaultValues);
        setModal({
          open: true,
          status: "success",
          title: "Inscripción realizada.",
          message:
            "Tu inscripción fue registrada correctamente. En los próximos minutos recibirás un correo electrónico con la confirmación.",
        });
        return;
      }

      setModal({
        open: true,
        status: "error",
        title: "Error al inscribirse",
        message: responseJSON.message,
      });
    } catch {
      setModal({
        open: true,
        status: "error",
        title: "Error del servidor",
        message:
          "No fue posible registrar la inscripción. Intentá nuevamente en unos minutos.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bio-inscription-card">
      <form
        className="bio-inscription-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="bio-inscription-row">
          <div className="bio-inscription-field">
            <label htmlFor="apellido">Apellido *</label>
            <input
              id="apellido"
              type="text"
              aria-invalid={Boolean(errors.apellido)}
              className={errors.apellido ? "error" : ""}
              {...register("apellido")}
            />
            <FieldError message={errors.apellido?.message} />
          </div>
          <div className="bio-inscription-field">
            <label htmlFor="nombre">Nombre *</label>
            <input
              id="nombre"
              type="text"
              aria-invalid={Boolean(errors.nombre)}
              className={errors.nombre ? "error" : ""}
              {...register("nombre")}
            />
            <FieldError message={errors.nombre?.message} />
          </div>
        </div>

        <div className="bio-inscription-field">
          <label htmlFor="email">Correo electrónico *</label>
          <input
            id="email"
            type="email"
            aria-invalid={Boolean(errors.email)}
            className={errors.email ? "error" : ""}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div className="bio-inscription-row">
          <div className="bio-inscription-field">
            <label htmlFor="institucion">Institución / Empresa</label>
            <input
              id="institucion"
              type="text"
              {...register("institucion")}
            />
          </div>
          <div className="bio-inscription-field">
            <label htmlFor="cargo">Cargo</label>
            <input id="cargo" type="text" {...register("cargo")} />
          </div>
        </div>

        <div className="bio-inscription-row">
          <div className="bio-inscription-field">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              id="telefono"
              type="tel"
              aria-invalid={Boolean(errors.telefono)}
              maxLength={11}
              className={errors.telefono ? "error" : ""}
              {...register("telefono")}
            />
            <FieldError message={errors.telefono?.message} />
          </div>
          <div className="bio-inscription-field">
            <label htmlFor="provincia">Provincia</label>
            <input id="provincia" type="text" {...register("provincia")} />
          </div>
        </div>

        <div className="bio-inscription-field">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            id="observaciones"
            placeholder="Restricción alimentaria (celíaco, diabético, etc.)"
            {...register("observaciones")}
          />
        </div>

        <Button
          className="bio-btn-gradient bio-inscription-button"
          size="xl"
          type="submit"
        >
          Confirmar inscripción
        </Button>
      </form>

      <LoadingOverlay open={loading} />

      <ResultModal
        open={modal.open}
        status={modal.status}
        title={modal.title}
        message={modal.message}
        onClose={() =>
          setModal((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />
    </div>
  );
}
