import "./Card.css"; // Import CSS file

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
  const sizeClasses = {
    small: "p-3 text-sm",
    medium: "p-4 text-base",
    large: "p-6 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-white shadow-md hover:shadow-lg rounded-xl border border-gray-100",
    secondary:
      "bg-gray-100 shadow-md hover:shadow-lg rounded-xl border border-gray-200",
  };

  return (
    <div
      className={` relative flex items-center gap-4 cursor-pointer transition-all duration-300 ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      } ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={!disabled && !loading ? onClick : undefined}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex justify-center items-center z-10 rounded-xl">
          <span className="loader border-4 border-t-4 border-gray-200 rounded-full w-6 h-6 animate-spin"></span>
        </div>
      )}

      {image && (
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-2">
          {startIcon && <div className="text-gray-500">{startIcon}</div>}
          {title && (
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
          )}
          {endIcon && <div className="ml-auto text-gray-500">{endIcon}</div>}
        </div>
        {description && (
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};
