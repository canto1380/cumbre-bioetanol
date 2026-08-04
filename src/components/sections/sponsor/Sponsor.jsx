import { Badge } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { SponsorCard } from "./SponsorCard";
import sponsorData from '../../../../public/data/sponsor.json'
import Button from "../../ui/Buttons";

export function Sponsor() {
  const openWhatsApp = (message = "") => {
    const phone = "5493815515421";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <section id='colaboradores' className='bio-sponsor'>
      <SectionTitle
        badge={
          <Badge variant="success">
            colaboradores
          </Badge>
        }
        title='Nos acompañan'
        subtitle="Instituciones, empresas y organismos que hacen posible esta edición de la Cumbre."
      />

      <div className='bio-sponsor-container'>
        {sponsorData.map((s) => (
          <SponsorCard key={s.id} data={s} />
        ))}
      </div>
      <p className="bio-sponsor-footer">
        ¿Tu organización quiere sumarse?
        <Button className='btn-sponsor'
          onClick={() =>
            openWhatsApp(
              "Hola, quiero información sobre la II Cumbre de Bioetanol."
            )
          }
        >
          Escribinos.
        </Button>
      </p>
    </section>
  )
}