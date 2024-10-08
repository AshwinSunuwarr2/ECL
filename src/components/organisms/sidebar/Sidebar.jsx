import React from 'react';

const Sidebar = ({ sidebarTitle, links = [] }) => {
  return (
    <div className="flex flex-col w-60 h-screen bg-secondary text-white">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-xl font-bold">{sidebarTitle}</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {links.length > 0 ? (
            links.map((link, index) => (
              <li key={index} className="hover:bg-gray-700">
                <a href={link.href} className="block p-4">
                  {link.label}
                </a>
              </li>
            ))
          ) : (
            <li className="p-4">No links available</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
