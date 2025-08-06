import React from "react";

export function CardShared({
  icon,
  title,
  description,
  primaryAction,
  onPrimaryClick,
  menuAction,
}) {
  // .app-card {
  //  background-color: var(--content-bg);
  //  border-radius: 14px;
  //  border: 1px solid var(--theme-bg-color);
  //  padding: 20px;
  //  cursor: pointer;
  //  transition: 0.3s ease;
  //  &:hover {
  //   transform: scale(1.02);
  //   background-color: var(--theme-bg-color);
  //  }
  //  svg {
  //   width: 28px;
  //   border-radius: 6px;
  //   margin-right: 12px;
  //   flex-shrink: 0;
  //  }
  //  & + .app-card {
  //   margin-left: 20px;
  //  }
  //  span {
  //   display: flex;
  //   align-items: center;
  //  }
  //  &__subtext {
  //   font-size: 14px;
  //   font-weight: 400;
  //   line-height: 1.6em;
  //   margin-top: 20px;
  //   border-bottom: 1px solid var(--border-color);
  //   padding-bottom: 20px;
  //  }
  //  &-buttons {
  //   display: flex;
  //   align-items: center;
  //   margin-left: auto;
  //   margin-top: 16px;
  //  }
  //  @media screen and (max-width: 1110px) {
  //   width: calc(50% - 20px);
  //   &:last-child {
  //    margin-top: 20px;
  //    margin-left: 0px;
  //   }
  //  }
  //  @media screen and (max-width: 565px) {
  //   width: calc(100% - 20px);
  //   margin-top: 20px;
  //   & + .app-card {
  //    margin-left: 0;
  //   }
  //  }
  // }

  return (
    <div className="bg-gradient-to-r bg-gray-100 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg w-80 ">
      {/* Icon and Title */}
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-[#2d004d] p-2 rounded-lg text-white  ">{icon}</div>
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
