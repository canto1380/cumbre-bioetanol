import { useState } from "react";
import Button from "../../ui/Buttons/Button";
import { registerInscription } from "../../../services/googleSheet-service";
import { LoadingOverlay } from "../../Commons/Loading/Loading";
import { ResultModal } from "../../Modals/Modal";

const initialValues = {
  apellido: "",
  nombre: "",
  email: "",
  institucion: "",
  cargo: "",
  telefono: "",
  provincia: "",
};
export function InscriptionForm() {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState({
    open: false,
    status: '',
    title: '',
    message: ''
  })
  const [form, setForm] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const validateForm = () => {
    const newErrors = {};

    // ==========================
    // Obligatorios
    // ==========================
    if (!form.apellido.trim()) {
      newErrors.apellido = "El apellido es obligatorio.";
    }
    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }
    if (!form.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    }

    // ==========================
    // Email
    // ==========================
    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Ingrese un correo electrónico válido.";
    }

    // ==========================
    // Teléfono
    // ==========================
    if (
      form.telefono &&
      !/^[0-9+\-\s()]{6,20}$/.test(form.telefono)
    ) {
      newErrors.telefono = "Ingrese un teléfono válido.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const reset = () => {
    setForm(initialValues)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true)
      const data = form
      const response = await registerInscription(data)
      const responseJSON = JSON.parse(response)
      if (responseJSON.success) {
        reset()
        setModal({
          open: true,
          status: 'success',
          title: 'Inscripción realizada.',
          message:
            `Tu inscripción fue registrada correctamente.
          En los próximos minutos recibirás un correo electrónico con la confirmación.`,
        })
        setLoading(false)
        return
      }
      if (!responseJSON.success) {
        setModal({
          open: true,
          status: "error",
          title: "Error al inscribirse",
          message:
            responseJSON.message,
        });
        setLoading(false)
        return;
      }

      setModal({
        open: false,
        status: "",
        title: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);

      setModal({
        open: true,
        status: "error",
        title: "Error del servidor",
        message:
          "No fue posible registrar la inscripción. Intentá nuevamente en unos minutos.",
      });
    }
  };

  return (
    <div className="bio-inscription-card">
      <form
        className="bio-inscription-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="bio-inscription-row">
          <div className="bio-inscription-field">
            <label>Apellido *</label>
            <input
              type="text"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              className={errors.apellido ? 'error' : ''}
            />
            {errors.apellido && (
              <span className="bio-form-error">
                {errors.apellido}
              </span>
            )}
          </div>
          <div className="bio-inscription-field">
            <label>Nombre *</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className={errors.nombre ? 'error' : ''}
            />
            {errors.nombre && (
              <span className="bio-form-error">
                {errors.nombre}
              </span>
            )}
          </div>
        </div>
        <div className="bio-inscription-field">
          <label>Correo electrónico *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="bio-form-error">
              {errors.email}
            </span>
          )}
        </div>
        <div className="bio-inscription-row">
          <div className="bio-inscription-field">
            <label>Institución / Empresa</label>
            <input
              type="text"
              name="institucion"
              value={form.institucion}
              onChange={handleChange}
            />
          </div>
          <div className="bio-inscription-field">
            <label>Cargo</label>
            <input
              type="text"
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bio-inscription-row">
          <div className="bio-inscription-field">
            <label>Teléfono</label>
            <input
              type="number"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className={errors.telefono ? "error" : ""}
            />
            {errors.telefono && (
              <span className="bio-form-error">
                {errors.telefono}
              </span>
            )}
          </div>
          <div className="bio-inscription-field">
            <label>Provincia</label>
            <input
              type="text"
              name="provincia"
              value={form.provincia}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          className="bio-btn-gradient bio-inscription-button"
          size="xl"
          type="submit"
        >
          Confirmar inscripción
        </Button>
      </form>
      <LoadingOverlay
        open={loading}
      />

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