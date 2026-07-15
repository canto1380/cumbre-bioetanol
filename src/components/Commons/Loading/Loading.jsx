export function LoadingOverlay({
  open,
  message = "Enviando inscripción..."
}) {

  if (!open) return null;

  return (
    <div className="bio-loading-overlay">
      <div className="bio-loading-box">
        <div className="bio-spinner" />
        <h3>
          Procesando inscripción
        </h3>
        <p>{message}</p>
      </div>
    </div>
  );
}