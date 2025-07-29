import "./Card.css"; // You can define your styles or use Tailwind

export const CardShared = ({
  title,
  description,
  image,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  onClick,
  children,
  ...props
}) => {
  const className = `shared-card shared-card--${variant} shared-card--${size} ${
    disabled || loading ? "shared-card--disabled" : ""
  }`;

  return (
    <div
      className={className}
      onClick={!disabled && !loading ? onClick : undefined}
      {...props}
    >
      {loading && (
        <div className="loader-overlay">
          <span className="loader" />
        </div>
      )}

      {image && (
        <div className="shared-card__image-wrapper">
          <img src={image} alt={title} className="shared-card__image" />
        </div>
      )}

      <div className="shared-card__content">
        {startIcon && <div className="icon-start">{startIcon}</div>}

        {title && <h3 className="shared-card__title">{title}</h3>}
        {description && (
          <p className="shared-card__description">{description}</p>
        )}

        {children}

        {endIcon && <div className="icon-end">{endIcon}</div>}
      </div>
    </div>
  );
};
