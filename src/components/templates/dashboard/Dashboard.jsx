import React from 'react';
import Sidebar from '../../organisms/sidebar/Sidebar';


const App = () => {
  const sidebarTitle = "My Sidebar";
  const links = [
    { label: "Assets", href: "#" },
    { label: "Liabilites", href: "#" },
    { label: "Something", href: "#" },
    { label: "Something", href: "#" },
  ];

  return (
    <section className="flex w-full">
      <Sidebar sidebarTitle={sidebarTitle} links={links} />

      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-title font-bold">Main Content</h1>
        <p>This is where your main content will go.</p>
      </div>

    </section>
  );
};

export default App;
