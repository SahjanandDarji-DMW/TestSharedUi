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
          <div className="bg-[#2d004d] p-2 rounded-lg  text-white text-sm font-bold w-10 h-10 flex items-center justify-center">
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
                ? "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md shadow-lg"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } text-sm px-4 py-1.5 rounded-full transition duration-300`}
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
    <div className=" bg-gray-[#F2F2F2] backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg w-full">
      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-[#2d004d] p-2 rounded-lg text-white">{icon}</div>
        <h2 className={` ${textColor} text-lg font-semibold `}>{title}</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-white mb-6 whitespace-pre-line">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-between">
        <button
          className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md border border-white/30 transition duration-300"
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
