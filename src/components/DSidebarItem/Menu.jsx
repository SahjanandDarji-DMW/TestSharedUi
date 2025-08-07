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
    <div className="w-64 h-[500px] bg-gray-[#F2F2F2] backdrop-blur-md text-white p-4 rounded-xl shadow-lg">
      <div className="h-full overflow-y-auto custom-scrollbar pr-2">
        {/* Apps Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-200 mb-2">Apps</h2>
          <ul className="space-y-2">
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md transition">
              <SidebarItem icon={faThLarge} label="All Apps" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faSyncAlt} label="Updates" badge="3" />
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-200 mb-2">
            Categories
          </h2>
          <ul className="space-y-2">
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faCamera} label="Photography" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faPaintBrush} label="Graphic Design" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faVideo} label="Video" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faMusic} label="Music" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faCode} label="Development" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faBook} label="Education" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faChartLine} label="Analytics" />
            </li>
            <li className="rounded-lg hover:bg-white/10 cursor-pointer backdrop-blur-md  transition">
              <SidebarItem icon={faGamepad} label="Gaming" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
