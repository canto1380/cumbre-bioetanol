import { InscriptionData } from "./InscriptionData";
import { InscriptionForm } from "./InscriptionForm";

export function Inscription() {
  return (
    <section id='inscripcion' className='bio-inscription'>
      <div className="bio-inscription-container">
        <InscriptionData />
        <InscriptionForm />
      </div>
    </section>
  )
}