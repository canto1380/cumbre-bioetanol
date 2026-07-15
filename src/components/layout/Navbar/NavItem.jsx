import useNavigation from "../../../hooks/useNavigation";

function NavItem({
  id,
  label,
  onClick,
}) {
  const { navigateToSection } = useNavigation()

  const handleClick = () => {
    navigateToSection(id);

    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className="bio-navbar-link"
      onClick={handleClick}
    >
      {label}
    </button>

  );
}

export default NavItem;