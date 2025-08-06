import React from "react";

export function CardShared({
  icon,
  title,
  description,
  primaryAction,
  onPrimaryClick,
  menuAction,
  className,
  textColor,
  statusColor = "green", // optional for horizontal layout
  variant = "vertical", // "vertical" or "horizontal"
}) {
  // 🔁 Horizontal Layout (like the image)
  if (variant === "horizontal") {
    const baseClasses =
      variant === "horizontal"
        ? "bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 flex items-center justify-between"
        : "bg-gradient-to-r bg-gray-100 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg";

    return (
      <div className={`${baseClasses}  ${className}`}>
        {/* Icon + Title + Description */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#2d004d] p-2 rounded-lg text-white text-sm font-bold w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <div className={`${textColor} font-medium`}>{title}</div>
            <div className="flex items-center space-x-2 text-sm">
              <span
                className={`w-2 h-2 rounded-full ${
                  statusColor === "green"
                    ? "bg-green-400"
                    : statusColor === "blue"
                    ? "bg-blue-400"
                    : "bg-gray-400"
                }`}
              ></span>
              <span className={` ${textColor} `}> {description}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <button
            className={`${
              primaryAction === "Update this app"
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-white/10 text-white border border-white/20"
            } text-sm px-4 py-1.5 rounded-full shadow`}
            onClick={onPrimaryClick}
          >
            {primaryAction}
          </button>
          {menuAction && (
            <button
              className="text-white/60 hover:text-white text-xl px-2"
              onClick={menuAction}
            >
              ⋯
            </button>
          )}
        </div>
      </div>
    );
  }

  // ✅ Original Vertical Layout
  return (
    <div className="bg-gradient-to-r bg-gray-100 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg w-80">
      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-[#2d004d] p-2 rounded-lg text-white">{icon}</div>
        <h2 className="text-lg font-semibold text-black">{title}</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-6 whitespace-pre-line">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full shadow"
          onClick={onPrimaryClick}
        >
          {primaryAction}
        </button>
        {menuAction && (
          <button
            className="text-gray-300 hover:text-white text-xl px-2"
            onClick={menuAction}
          >
            ⋯
          </button>
        )}
      </div>
    </div>
  );
}
