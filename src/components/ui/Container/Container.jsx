import clsx from "clsx";
import '../../../styles/components/container.css'

const sizes = {
  sm: "bio-container-sm",
  md: "bio-container-md",
  lg: "bio-container-lg",
  xl: "bio-container-xl",
  full: "bio-container-full",
};

function Container({
  children,
  size = "xl",
  className,
}) {
  return (
    <div
      className={clsx(
        "bio-container",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;