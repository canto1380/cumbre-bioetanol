import { InscriptionCTA } from "./InscriptionCTA";
import { InscriptionData } from "./InscriptionData";
import { InscriptionForm } from "./InscriptionForm";

export function Inscription() {
  return (
    <section id='inscripcion' className='bio-inscription'>
      <div className="bio-inscription-container">
        <InscriptionData />
        <InscriptionCTA />
        {/* <InscriptionForm /> */}
      </div>
    </section>
  )
}