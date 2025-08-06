import React from "react";

export function CardShared({
  icon,
  title,
  description,
  primaryAction,
  onPrimaryClick,
  menuAction,
}) {
  return (
    <div className="bg-gradient-to-r from-indigo-900/30 via-cyan-500/20 to-pink-500/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg w-80">
      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-[#2d004d] p-2 rounded-lg">{icon}</div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-6 whitespace-pre-line">
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
