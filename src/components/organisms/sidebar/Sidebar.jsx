import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../../utils/Navdata';

const Sidebar = ({ sidebarTitle}) => {
   const activeLink = 'hover:bg-primary bg-primary hover:text-black px-4 py-2 rounded-l-2xl flex flex-col';
   const normalLink = 'hover:bg-primary hover:text-black px-4 py-2 rounded-l-2xl flex flex-col';
  return (
    <section className="flex flex-col w-[190px] h-screen bg-secondary text-white">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-xl font-bold">{sidebarTitle}</h1>
      </div>
      <nav className="flex-1 gap-1">
        {SidebarData.map((item, index) =>(

            <NavLink key={index}  className={({ isActive }) => (isActive ? activeLink : normalLink)} to={item.path}>{item.title}</NavLink>

        )
         
            
          )
        }
      </nav>
    </section>
  );
};

export default Sidebar;
