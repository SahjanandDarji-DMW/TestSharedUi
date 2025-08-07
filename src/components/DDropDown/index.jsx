import { Select, Option } from "@material-tailwind/react";
export function DDropDown({
  label = "Select Option",
  options = [],
  value,
  onChange,
  placeholder = "Choose...",
  className = "",
}) {
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
        label={placeholder}
        className="!border !border-transparent focus:!border-white !rounded-xl !bg-white/10 !backdrop-blur-md !text-white !shadow-none placeholder:!opacity-100 transition-all duration-200"
        labelProps={{
          className: "text-white/50",
        }}
        menuProps={{
          className: `bg-gray-[#F2F2F2] backdrop-blur-md text-white rounded-md ${scrollClass}`,
        }}
        containerProps={{
          className: "!border-none !shadow-none",
        }}
      >
        {options.map((opt, idx) => (
          <Option key={idx} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
