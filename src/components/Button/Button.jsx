import React from "react";
import "./Button.css";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  ...props
}) => {
  const className = `shared-btn shared-btn--${variant} shared-btn--${size} ${
    disabled ? "shared-btn--disabled" : ""
  }`;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
