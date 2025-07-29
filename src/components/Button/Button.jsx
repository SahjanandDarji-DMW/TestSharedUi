export const ButtonSheard = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  onClick,
  ...props
}) => {
  const className = `shared-btn shared-btn--${variant} shared-btn--${size} ${
    disabled || loading ? "shared-btn--disabled" : ""
  }`;

  return (
    <button
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="loader" />
      ) : (
        <>
          {startIcon && <span className="icon-start">{startIcon}</span>}
          <span>{children}</span>
          {endIcon && <span className="icon-end">{endIcon}</span>}
        </>
      )}
    </button>
  );
};
