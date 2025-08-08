import React, { useState } from "react";
import { DDropDown, NavTab } from "./components";

const App = () => {
  const [selected, setSelected] = useState(undefined);

  const tabs = [
    {
      label: "Dashboard",
      value: "dashboard",
      desc: "Welcome to the dashboard.",
    },
    { label: "Profile", value: "profile", desc: "Here is your profile info." },
    {
      label: "Settings",
      value: "settings",
      desc: "Adjust your preferences here.",
    },
    {
      label: "Work",
      value: "work",
      desc: "Adjust your preferences here.",
    },
  ];
  const avatarUrl =
    "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1754637524~exp=1754641124~hmac=570438fb8c61e3d1b0d63e4c67e0ec0c048d2b5f6d928e400554a31acebe8b7d&w=1060";
  const tabTextColor = "text-white";
  return (
    <div className="w-[70%] p-10">
      <DDropDown
        label="Technology"
        options={[
          { value: "html", label: "HTML" },
          { value: "css", label: "CSS" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
          { value: "js", label: "JavaScript" },
        ]}
        placeholder="Choose tech..."
        className="w-full bg-gray-[#F2F2F2] "
        value={selected}
        onChange={setSelected}
      />
      <NavTab tabs={tabs} avatarUrl={avatarUrl} tabTextColor={tabTextColor} />
    </div>
  );
};

export default App;
