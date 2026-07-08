import { Link } from "react-scroll";

function NavItem({
  id,
  label,
  onClick,
}) {
  return (
    <Link
      to={id}
      smooth
      spy
      duration={700}
      offset={-90}
      onClick={onClick}
      className="bio-navbar-link"
      activeClass="bio-navbar-link-active"
    >
      {label}
    </Link>
  );
}

export default NavItem;