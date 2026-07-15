import { Badge, Check } from "lucide-react";

import inscriptionItems from "../../../../public/data/inscripcionInfo.json";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

export function InscriptionData() {
  return (
    <div className="bio-inscription-info">
      <SectionTitle
        badge={
          <Badge variant='success'>
            Inscripción
          </Badge>
        }
        title='Reservá tu lugar'
        subtitle='Completá el formulario. Los datos se almacenan localmente en este dispositivo.'
      />

      <div className="bio-inscription-benefits">
        {inscriptionItems.map((item) => (
          <div
            key={item.id}
            className="bio-inscription-benefit"
          >
            <div className="bio-inscription-benefit-icon">
              <Check size={16} />
            </div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}