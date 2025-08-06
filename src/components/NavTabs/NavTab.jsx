import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCloud, faTimes } from "@fortawesome/free-solid-svg-icons";

export function NavTab({ tabs, avatarUrl, tabTextColor }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "");
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-xl backdrop-blur-md bg-gray-[F2F2F2] border border-white/10 p-2 shadow-md flex items-center justify-between "
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-black shadow-none rounded-none",
          }}
        >
          <div
            className={` flex items-center justify-between w-full gap-4 ${tabTextColor}`}
          >
            {!searchMode ? (
              <div className="flex gap-4 items-center">
                {tabs.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={`px-4 py-2 transition-colors duration-300 ${
                      activeTab === value ? " font-semibold" : `${tabTextColor}`
                    }`}
                  >
                    {label}
                  </Tab>
                ))}
              </div>
            ) : (
              <div className="flex-grow" />
            )}

            {/* Search Input */}
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                searchMode ? "w-full" : "w-64"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchMode(true)}
                className="w-full px-4 py-2 text-white bg-black/30 rounded-md outline-none placeholder-white/70"
              />
              {searchMode && (
                <button
                  onClick={() => {
                    setSearchMode(false);
                    setSearchQuery("");
                  }}
                  className="text-black "
                >
                  <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className={`relative ${tabTextColor} cursor-pointer`}>
                <FontAwesomeIcon icon={faBell} className="h-5 w-5" />
                <span className="absolute -top-1 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </button>
              <FontAwesomeIcon
                icon={faCloud}
                className={`h-5 w-5 ${tabTextColor} cursor-pointer`}
              />
              <img
                src={avatarUrl}
                alt="Avatar"
                className="h-8 w-8 rounded-full object-cover border-2 border-white"
              />
            </div>
          </div>
        </TabsHeader>

        <TabsBody>
          {tabs.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <p className="whitespace-pre-line text-gray-800">{desc}</p>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
