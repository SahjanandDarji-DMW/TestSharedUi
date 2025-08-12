import React, { useState } from "react";
import {
  CardShared,
  DDropDown,
  DForms,
  DPopOver,
  Menu,
  NavTab,
} from "./components";
import * as Yup from "yup";
import { Checkbox } from "@material-tailwind/react";
import formConfig from "./Formmetedata.json/index.json"; // adjust path as needed

const App = () => {
  const [selected, setSelected] = useState(undefined);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    <>
      <div className="flex h-screen overflow-hidden bg-[#0D1B2A] text-white">
        {/* Sidebar */}
        <div className="hidden md:block w-[250px] shrink-0 overflow-y-auto border-r border-gray-700 p-4">
          <Menu />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {/* Your existing content goes here */}
          <NavTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabTextColor="text-white"
            searchMode={searchMode}
            setSearchMode={setSearchMode}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            avatarUrl={avatarUrl}
          />

          <h2 className="mt-4 text-xl font-semibold">
            Welcome to the dashboard.
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            {/* Cards */}
            <CardShared
              icon="Ai"
              title="Illustrator"
              textColor="text-white"
              description="Update Available"
              statusColor="blue"
              primaryAction="Update this app"
              onPrimaryClick={() => alert("Updating Illustrator")}
              menuAction={() => alert("Menu clicked")}
              variant="horizontal"
            />

            <CardShared
              title="Testingg"
              icon="sajju"
              description="testing card"
              primaryAction="Next"
              onPrimaryClick={() => {}}
              menuAction={true}
              textColor="text-white"
            />

            {/* Dropdown */}
            <div className="w-full md:w-[300px]">
              <DDropDown
                label="Technology"
                options={[
                  { value: "html", label: "HTML" },
                  { value: "css", label: "CSS" },
                  { value: "js", label: "JavaScript" },
                ]}
                placeholder="Choose tech..."
                className="w-full bg-gray-[#F2F2F2]"
                value={selected}
                onChange={setSelected}
              />
            </div>
          </div>

          {/* Popover and Form */}
          <div className="mt-6">
            <DPopOver buttonText="Click Me">
              This is Custom Test Popover
            </DPopOver>
          </div>

          <div className="mt-6 w-full">
            <DForms title="Email Form" formData={formConfig} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
