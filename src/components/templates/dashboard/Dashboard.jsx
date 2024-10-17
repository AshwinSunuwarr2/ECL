import React, { useState } from 'react';
import Sidebar from '../../organisms/sidebar/Sidebar';

import NavPage from '../../navigations/NavPage';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="flex flex-row w-full flex-grow bg-primary overflow-clip">
      <Sidebar sidebarTitle="My Sidebar" isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} className=""/>

      <div className="lg:ml-[200px] sm:ml-[150px] px-4 pt-10 flex-grow">
      <button onClick={toggleSidebar} className="fixed top-0 left-0 p-4 lg:hidden md:hidden">Open Sidebar</button>
        <NavPage />
      </div>

    </section>
  );
};

export default App;
