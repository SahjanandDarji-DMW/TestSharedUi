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
    options.length > 3
      ? "max-h-40 overflow-y-auto custom-scrollbar"
      : "max-h-fit";
  console.log("value", value);
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-1 text-sm text-white/80">{label}</label>
      )}
      <Select
        value={value}
        onChange={(val) => {
          onChange(val);
          console.log("Oncahnge.>", val);
        }}
        placeholder={placeholder}
        className="!border !border-transparent focus:!border-white !rounded-xl !bg-white/10 backdrop-blur-sm !text-white font-bold !shadow-none placeholder:!opacity-100 transition-all duration-200 placeholder:text-white"
        labelProps={{
          className:
            "text-white/50 font-bold before:content-none after:content-none",
        }}
        menuProps={{
          className: `bg-gray-[#F2F2F2] backdrop-blur-lg text-md  text-white font-bold rounded-md ${scrollClass}`,
        }}
        containerProps={{
          className: "!border-none !shadow-none",
        }}
      >
        <Option key={-1} value={placeholder}>
          {placeholder}
        </Option>
        {options.map((opt, idx) => (
          <Option key={idx} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
