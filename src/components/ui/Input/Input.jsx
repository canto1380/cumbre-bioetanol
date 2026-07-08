import clsx from "clsx";

import { INPUT_SIZES } from "./input.constants";

function Input({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  size = "md",
  className,
  id,
  required,
  ...props
}) {

  return (
    <div className="bio-input-group">
      {label && (
        <label
          htmlFor={id}
          className="bio-input-label"
        >
          {label}

          {required && (
            <span className="bio-input-required">
              *
            </span>
          )}
        </label>
      )}
      <div
        className={clsx(
          "bio-input-wrapper",

          INPUT_SIZES[size],

          error && "bio-input-error"
        )}
      >

        {leftIcon && (
          <span className="bio-input-icon">
            {leftIcon}
          </span>
        )}
        <input
          id={id}
          required={required}
          className={clsx(
            "bio-input",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <span className="bio-input-icon">
            {rightIcon}
          </span>
        )}
      </div>
      {helperText && !error && (
        <small className="bio-input-helper">
          {helperText}
        </small>
      )}
      {error && (
        <small className="bio-input-error-text">
          {error}
        </small>
      )}
    </div>
  );
}

export default Input;