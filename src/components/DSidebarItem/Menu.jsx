import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Scrollbar.css";
import {
  faThLarge,
  faSyncAlt,
  faCamera,
  faPaintBrush,
  faVideo,
  faMusic,
  faCode,
  faBook,
  faChartLine,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarItem } from "./index";

export function Menu() {
  return (
    <div className="w-[50%] md:w-64 h-[400px] md:h-[500px] bg-gray-[#F2F2F2] border border-white/20 backdrop-blur-md text-white p-3 rounded-xl shadow-lg text-xs md:text-sm">
      <div className="h-full overflow-y-auto scroll-smooth custom-scrollbar pr-1 md:pr-2">
        {/* Apps Section */}
        <div className="mb-3 md:mb-6">
          <h2 className="text-sm md:text-lg font-semibold text-gray-200 mb-1 md:mb-2">
            Apps
          </h2>
          <ul className="space-y-1 md:space-y-2">
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faThLarge} label="All Apps" iconSize="xs" />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem
                icon={faSyncAlt}
                label="Updates"
                badge="3"
                iconSize="xs"
              />
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="text-sm md:text-lg font-semibold text-gray-200 mb-1 md:mb-2">
            Categories
          </h2>
          <ul className="space-y-1 md:space-y-2">
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faCamera} label="Photography" iconSize="xs" />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem
                icon={faPaintBrush}
                label="Graphic Design"
                iconSize="xs"
              />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faVideo} label="Video" iconSize="xs" />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faMusic} label="Music" iconSize="xs" />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faCode} label="Development" iconSize="xs" />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faBook} label="Education" iconSize="xs" />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faChartLine} label="Analytics" iconSize="xs" />
            </li>
            <li className="rounded-md md:rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition px-1 py-0.5 md:px-2 md:py-1">
              <SidebarItem icon={faGamepad} label="Gaming" iconSize="xs" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
