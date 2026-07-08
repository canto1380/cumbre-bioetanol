import clsx from "clsx";

import {
  BADGE_VARIANTS,
  BADGE_SIZES,
} from "./badge-constant";

function Badge({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  className,
  ...props
}) {
  return (
    <span
      className={clsx(
        "bio-badge",
        BADGE_VARIANTS[variant],
        BADGE_SIZES[size],
        className
      )}
      {...props}
    >
      {leftIcon}

      {children}

      {rightIcon}
    </span>
  );
}

export default Badge;