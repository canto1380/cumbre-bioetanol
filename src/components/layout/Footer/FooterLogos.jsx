import logoCumbre from "../../../assets/LogoV2.png";

export function FooterLogos() {
  return (
    <div className="bio-footer-column">

      <img
        src={logoCumbre}
        alt="II Cumbre de Bioetanol"
        className="bio-footer-main-logo"
      />
      <p className='bio-footer-label'>
        La 2° Cumbre de Bioetanol se propone como un punto de convergencia para líderes
        del sector público, privado y académico, con el propósito de consolidar el
        rol estratégico del bioetanol en la matriz energética nacional, promover el
        intercambio de experiencias y fortalecer la cooperación regional en torno a una
        industria clave para el desarrollo sostenible.
      </p>

    </div>
  )
}