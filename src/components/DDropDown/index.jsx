import { Select, Option } from "@material-tailwind/react";
import "../DSidebarItem/Scrollbar.css";
export function DDropDown({
  label = "Select Option",
  options = [],
  value,
  onChange,
  placeholder = "Choose...",
  className = "",
}) {
  // Inject placeholder as a disabled option
  const finalOptions = [
    { label: placeholder, value: "", disabled: true },
    ...options,
  ];

  // Scroll if more than 5 options (excluding placeholder)
  const scrollClass =
    options.length > 5
      ? "max-h-60 overflow-y-auto custom-scrollbar"
      : "max-h-fit";

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-1 text-sm text-white/80">{label}</label>
      )}
      <Select
        value={value}
        onChange={onChange}
        className="!border !border-white/20 !rounded-xl !bg-white/10 !backdrop-blur-md !text-white focus:!border-white/30"
        labelProps={{
          className: "hidden",
        }}
        menuProps={{
          className: `bg-gray-[#F2F2F2] backdrop-blur-md text-white rounded-md ${scrollClass}`,
        }}
        containerProps={{
          className: "!border-none !shadow-none",
        }}
      >
        {finalOptions.map((opt, idx) => (
          <Option
            key={idx}
            value={opt.value}
            disabled={opt.disabled}
            className="bg-gray-[#F2F2F2]"
          >
            {opt.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
