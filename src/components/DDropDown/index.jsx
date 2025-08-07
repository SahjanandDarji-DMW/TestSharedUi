import React from "react";
import { Select, Option } from "@material-tailwind/react";

const DDropDown = ({
  label = "Select Option",
  options = [],
  value,
  onChange,
  placeholder = "Choose...",
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-1  text-sm text-white/80">{label}</label>
      )}
      <Select
        label={placeholder}
        value={value}
        onChange={onChange}
        className="!border !border-white/20 !rounded-xl !bg-white/10 !backdrop-blur-md !text-white placeholder:!opacity-100 focus:!border-white/30"
        labelProps={{
          className: "hidden",
        }}
        menuProps={{
          className: "bg-gray-[#F2F2F2] backdrop-blur-md text-white rounded-md",
        }}
        containerProps={{
          className: "!border-none !shadow-none",
        }}
      >
        {options.map((opt, idx) => (
          <Option key={idx} value={opt.value} className="bg-gray-[#F2F2F2]">
            {opt.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default DDropDown;
