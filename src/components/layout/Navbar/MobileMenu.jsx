import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Button from "../../ui/Buttons";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "./navbar.constant";
import { useApp } from "../../../hooks/useApp";

function MobileMenu({ isOpen, onClose }) {
  const { openRegisterModal } = useApp();

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
        fullWidth
        onClick={() => {
          onClose();
          openRegisterModal();
        }}
        rightIcon={<ArrowRight size={16} />}
      >
        Inscribirme
      </Button>
    </div>
  );
}

export default MobileMenu;
