import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faBell,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

export function NavTab({
  tabs,
  activeTab,
  setActiveTab,
  tabTextColor,
  searchMode,
  setSearchMode,
  searchQuery,
  setSearchQuery,
  avatarUrl,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 relative">
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-xl bg-gray-[#F2F2F2] backdrop-blur-md border border-white/10 px-4 py-3 shadow-md flex items-center justify-between"
          indicatorProps={{
            className: `bg-transparent border-b-2 ${tabTextColor} shadow-none rounded-none`,
          }}
        >
          <div
            className={`flex items-center justify-between  w-full gap-4 ${tabTextColor}`}
          >
            {/* Mobile Hamburger */}
            <div className="sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${tabTextColor}`}
              >
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              </button>
            </div>

            {/* Tabs for Desktop */}
            {!searchMode ? (
              <div className="hidden sm:flex gap-4 items-center">
                {tabs.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={`px-4 py-2 transition-colors duration-300 ${
                      activeTab === value ? "font-semibold" : `${tabTextColor}`
                    }`}
                  >
                    {label}
                  </Tab>
                ))}
              </div>
            ) : (
              <></>
            )}

            {/* Search Input */}
            <div
              className={`flex items-center gap-2 transition-all duration-300  ${
                searchMode ? "w-full" : "w-64"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchMode(true)}
                className="w-full px-4 py-2 text-white bg-black/30 rounded-full outline-none placeholder-white/70 border border-white/10"
              />
              {/* Show X button only on desktop */}
              {searchMode && (
                <button
                  onClick={() => {
                    setSearchMode(false);
                    setSearchQuery("");
                  }}
                  className={`hidden sm:block ${tabTextColor}`}
                >
                  <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
                </button>
              )}
            </div>
            {/* Right Icons */}
            <div className="flex items-center gap-4 pr-4 sm:pr-6">
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

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-[55%] left-0 w-full z-50 sm:hidden rounded-xl px-4 py-3 bg-gray-[#F2F2F2] border border-white/20 shadow-2xl backdrop-blur-md  ">
            {tabs.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => {
                  setActiveTab(value);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-white ${
                  activeTab === value ? "font-semibold" : ""
                }`}
              >
                {label}
              </Tab>
            ))}
          </div>
        )}

        <TabsBody>
          {tabs.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <p
                className={`whitespace-pre-line ${tabTextColor} text-gray-800`}
              >
                {desc}
              </p>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
