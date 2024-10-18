import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../../utils/Navdata";

const Sidebar = ({  sidebarTitle, isOpen, toggleSidebar , className }) => {

  const activeLink =
    "hover:bg-primary bg-primary hover:text-secondary px-4 py-2 rounded-l-full flex flex-col font-bold";
  const normalLink =
    "hover:bg-primary px-4 py-2 rounded-l-full flex flex-col font-bold";

  return (
    <section className={`flex top-0 left-0 z-20 flex-col fixed w-[200px] pl-2 h-screen bg-black/30 backdrop-blur-[10px] text-white ${className} ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button onClick={toggleSidebar} className="p-4 lg:hidden md:hidden">Close</button>
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-xl font-bold">{sidebarTitle}</h1>
      </div>
      <nav className="flex-1 gap-1">
        {SidebarData.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to={item.path}
            onClick={window.innerWidth < 768 ? toggleSidebar : null}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
