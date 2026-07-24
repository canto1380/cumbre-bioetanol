import logoMinisterio from '../../../assets/ministerio.png';
import logoIpaat from '../../../assets/ipaat.png';

export function TopBar() {
  return (
    <div className="bio-topbar">

      <div className="bio-topbar-container">

        <a
          href="https://www.mecontuc.gob.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-topbar-logo"
        >
          <img
            src={logoMinisterio}
            alt="Ministerio"
          />
        </a>

        <a
          href="https://www.ipaat.gov.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-topbar-logo"
        >
          <img
            src={logoIpaat}
            alt="IPAAT"
          />
        </a>

      </div>

    </div>
  );
}