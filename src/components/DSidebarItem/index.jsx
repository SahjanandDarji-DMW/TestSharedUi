// src/Components/Sidebar/SidebarItem.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarItem = ({ icon, label, badge }) => {
  return (
    <li className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-[#F2F2F2] backdrop-blur-md ">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
      </div>
      {badge && (
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </li>
  );
};

export default SidebarItem;
