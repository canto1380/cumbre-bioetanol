import clsx from "clsx";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import Button from "../../ui/Buttons";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS } from "./navbar.constant";
import useNavbar from "./useNavbar";
import useNavigation from "../../../hooks/useNavigation";
import logoBlanco from '../../../assets/Logo V2 - blanco.png'
import logoColor from '../../../assets/LogoV1.png'

function Navbar() {
  const { isScrolled, isMenuOpen, toggleMenu, closeMenu } = useNavbar();
  const { navigateToSection } = useNavigation();

  return (
    <header
      className={clsx("bio-navbar", isScrolled && "bio-navbar-scrolled")}
    >
      <div className="bio-navbar-shell">
        <div className="bio-navbar-content">
          <RouterLink
            className="bio-navbar-brand"
            to="/"
          >
            <img
              src={isScrolled ? logoColor : logoBlanco}
              alt="2° Cumbre de Biocombustibles"
              className="bio-navbar-brand-logo"
            />
          </RouterLink>

          <nav className="bio-navbar-nav" aria-label="Principal">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.id} {...item} />
            ))}
          </nav>

          <div className="bio-navbar-actions">
            <Button
              className="bio-navbar-cta"
              onClick={() => navigateToSection("inscripcion")}
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
