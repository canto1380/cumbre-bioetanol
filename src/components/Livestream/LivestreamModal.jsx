import { useEffect, useState } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";
import { CiYoutube } from "react-icons/ci";

import Button from "../ui/Buttons";
import {
  LIVESTREAM,
  getYoutubeEmbedUrl,
} from "../../config/livestream.config";
import { useLivestreamStatus } from "../../hooks/useLivestreamStatus";

const STORAGE_KEY = "bio-livestream-dismissed";

export function LivestreamModal() {
  const { phase, countdown } = useLivestreamStatus(LIVESTREAM.startAt);
  const [modalOpen, setModalOpen] = useState(false);
  const [pipOpen, setPipOpen] = useState(false);
  const [pipMinimized, setPipMinimized] = useState(false);

  const isPlayerPhase = phase === "live" || phase === "ended";
  const videoId = LIVESTREAM.youtubeVideoId;
  console.log('phase: ', phase);
  const embedUrl = getYoutubeEmbedUrl(videoId, { autoplay: phase === "live" });

  const openPlayer = () => {
    setPipOpen(true);
    setPipMinimized(false);
  };

  const closeModal = () => {
    localStorage.setItem(STORAGE_KEY, "upcoming");
    setModalOpen(false);
  };

  useEffect(() => {
    if (phase === "live") {
      const today = new Date().toISOString().slice(0, 10);
      const seen = localStorage.getItem("bio-livestream-live-seen");
      if (seen !== today) {
        openPlayer();
        localStorage.setItem("bio-livestream-live-seen", today);
      }
      return;
    }

    if (phase === "upcoming" && localStorage.getItem(STORAGE_KEY) !== "upcoming") {
      setModalOpen(true);
    }
  }, [phase]);

  useEffect(() => {
    const onOpen = () => {
      if (isPlayerPhase) openPlayer();
      else setModalOpen(true);
    };

    window.addEventListener(LIVESTREAM.openEventName, onOpen);
    return () => window.removeEventListener(LIVESTREAM.openEventName, onOpen);
  }, [isPlayerPhase]);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen]);

  const showFab = !modalOpen && (!isPlayerPhase || !pipOpen);

  return (
    <>
      { phase !== "ended" && showFab && (
        <button
          type="button"
          className={`bio-live-fab ${phase === "live" ? "is-live" : ""}`}
          onClick={() => (isPlayerPhase ? openPlayer() : setModalOpen(true))}
          aria-label={
            phase === "live"
              ? "Ver transmisión en vivo"
              : "Ver información de la transmisión"
          }
        >
          {phase === "live" ? (
            <span className="bio-live-dot" aria-hidden="true" />
          ) : (
            <CiYoutube size={18} />
          )}
          <span>{phase === "live" ? "En vivo" : "Transmisión"}</span>
        </button>
      )}

      {modalOpen && phase === "upcoming" && (
        <div className="bio-live-overlay" onClick={closeModal} role="presentation">
          <div
            className="bio-live-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bio-live-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="bio-live-close"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <span className="bio-live-badge">Transmisión YouTube</span>
            <h2 id="bio-live-title">Mirá la cumbre desde acá.</h2>
            <p>
              El 21 de agosto transmitimos la II Cumbre de Bioetanol por YouTube.
              Cuando empiece el vivo, vas a poder verlo acá, sin salir de la página.
            </p>

            <div className="bio-live-countdown" aria-label="Tiempo restante">
              <div>
                <strong>{countdown.days}</strong>
                <span>días</span>
              </div>
              <div>
                <strong>{countdown.hours}</strong>
                <span>horas</span>
              </div>
              <div>
                <strong>{countdown.minutes}</strong>
                <span>min</span>
              </div>
            </div>

            <div className="bio-live-placeholder">
              <CiYoutube size={42} />
              <p>
                El reproductor se habilita el 21 de agosto, cuando empiece la
                transmisión.
              </p>
            </div>

            <div className="bio-live-actions">
              <Button
                className="bio-btn-gradient"
                size="lg"
                onClick={() =>
                  window.open(LIVESTREAM.youtubeChannelUrl, "_blank", "noopener")
                }
              >
                Abrir en YouTube
              </Button>
              <Button variant="outline" size="lg" onClick={closeModal}>
                Entendido
              </Button>
            </div>
          </div>
        </div>
      )}

      {isPlayerPhase && pipOpen && (
        <div
          className={`bio-live-pip ${pipMinimized ? "is-minimized" : ""} ${
            phase === "live" ? "is-live" : ""
          }`}
        >
          <div className="bio-live-pip-bar">
            <span className={`bio-live-badge ${phase === "live" ? "is-live" : ""}`}>
              {phase === "live" && <span className="bio-live-dot" />}
              {phase === "live" ? "En vivo" : "Transmisión"}
            </span>
            <p className="bio-live-pip-title">II Cumbre de Bioetanol</p>
            <div className="bio-live-pip-controls">
              <button
                type="button"
                onClick={() => setPipMinimized((value) => !value)}
                aria-label={pipMinimized ? "Expandir reproductor" : "Minimizar reproductor"}
              >
                {pipMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                type="button"
                onClick={() => setPipOpen(false)}
                aria-label="Cerrar reproductor"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!pipMinimized && (
            embedUrl ? (
              <div className="bio-live-player">
                <iframe
                  src={embedUrl}
                  title="Transmisión II Cumbre de Bioetanol"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="bio-live-placeholder bio-live-placeholder-pip">
                <CiYoutube size={36} />
                <p>Configurá el ID del vivo de YouTube para verlo acá.</p>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
