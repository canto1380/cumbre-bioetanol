import { CircleCheckBig, CircleX } from "lucide-react";
import Button from "../ui/Buttons";

export function ResultModal({
  open,
  status,
  title,
  message,
  onClose,
}) {

  if (!open) return null;

  return (
    <div className="bio-result-overlay">
      <div className="bio-result-modal">
      <div
          className={`bio-result-icon ${
            status === "success"
              ? "success"
              : "error"
          }`}
        >
          {
            status === "success"
              ? <CircleCheckBig />
              : <CircleX />
          }
        </div>

        <h2>{title}</h2>
        <p>{message}</p>
        <Button
          className="bio-result-button"
          onClick={onClose}
          size="lg"
        >
          Aceptar
        </Button>
      </div>
    </div>
  );
}