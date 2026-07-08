import clsx from "clsx";
import { ArrowRight, Leaf, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import Button from "../../ui/Buttons";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "./navbar.constant";
import useNavbar from "./useNavbar";
import { useApp } from "../../../hooks/useApp";
import logoBlanco from '../../../assets/Logo V2 - blanco.png'
import logoColor from '../../../assets/LogoV1.png'

function Navbar() {
  const { isScrolled, isMenuOpen, toggleMenu, closeMenu } = useNavbar();
  const { openRegisterModal } = useApp();

  return (
    <header
      className={clsx("bio-navbar", isScrolled && "bio-navbar-scrolled")}
    >
      <div className="bio-navbar-shell">
        <div className="bio-navbar-content">
          <Link
            className="bio-navbar-brand"
            duration={700}
            offset={-100}
            smooth
            spy
            to="inicio"
          >
            <img
              src={isScrolled ? logoColor : logoBlanco}
              alt="2° Cumbre de Biocombustibles"
              className="bio-navbar-brand-logo"
            />

          </Link>

          <nav className="bio-navbar-nav" aria-label="Principal">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.id} {...item} />
            ))}
          </nav>

          <div className="bio-navbar-actions">
            <Button
              className="bio-navbar-cta"
              onClick={openRegisterModal}
              rightIcon={<ArrowRight size={16} />}
              size="sm"
            >
              Inscribirme
            </Button>

            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="bio-navbar-menu-button"
              onClick={toggleMenu}
              type="button"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
}

export default Navbar;
