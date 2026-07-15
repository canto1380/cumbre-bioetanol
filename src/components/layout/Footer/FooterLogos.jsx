import logoCumbre from "../../../assets/Logo V2 - blanco.png";
import logoMinsiterio from "../../../assets/ministerio.png";
import logoIPAAT from "../../../assets/ipaat.png";

export function FooterLogos() {
  return (
    <div className="bio-footer-column">

      <img
        src={logoCumbre}
        alt="II Cumbre de Bioetanol"
        className="bio-footer-main-logo"
      />
      <p className='bio-footer-label'>
        La 2.ª Cumbre de Biocombustibles reúne a referentes del sector público, privado, académico y científico para impulsar
        el desarrollo del bioetanol, promover la innovación y fortalecer el futuro de una matriz energética más sustentable
        para Argentina.
      </p>

    </div>
  )
}