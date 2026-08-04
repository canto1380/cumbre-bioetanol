import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Button from "../../ui/Buttons";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "./navbar.constant";
import useNavigation from "../../../hooks/useNavigation";

function MobileMenu({ isOpen, onClose }) {
  const { navigateToSection } = useNavigation();

  const handleClickInscription = () => {
    navigateToSection("inscripcion");
    onClose();
  }

  return (
    <div
      className={clsx("bio-mobile-menu", isOpen && "bio-mobile-menu-open")}
    >
      <nav className="bio-mobile-nav">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id} {...item} onClick={onClose} />
        ))}
      </nav>

      <Button
        className="bio-navbar-cta"
        onClick={handleClickInscription}
        rightIcon={<ArrowRight size={16} />}
      >
        Inscribirme
      </Button>
    </div>
  );
}

export default MobileMenu;
