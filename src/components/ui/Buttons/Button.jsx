import clsx from "clsx";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "./button-constant";

// const variants = {
//   primary: 'bio-btn-primary',
//   secondary: "bio-btn-secondary",
//   outline: "bio-btn-outline",
//   ghost: "bio-btn-ghost",
//   danger: "bio-btn-danger",
// }
// const sizes = {
//   sm: "bio-btn-sm",
//   md: "bio-btn-md",
//   lg: "bio-btn-lg",
//   xl: "bio-btn-xl",
// };

function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  asChild = false,
  className,
  type = "button",
  ...props
}) {

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        "bio-btn",
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        fullWidth && "bio-btn-full",
        className
      )}
      {...props}
    >

      {loading && (
        <span className="bio-btn-spinner" />
      )}

      {!loading && leftIcon}

      <span>
        {children}
      </span>

      {!loading && rightIcon}

    </button>
  );

}

export default Button;