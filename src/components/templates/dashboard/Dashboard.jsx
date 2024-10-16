import React from 'react';
import Sidebar from '../../organisms/sidebar/Sidebar';

import NavPage from '../../navigations/NavPage';

const App = () => {
  const sidebarTitle = "My Sidebar";

  return (
    <section className="flex flex-row w-full flex-grow">
      <Sidebar sidebarTitle={sidebarTitle} className=""/>

      <div className="bg-primary flex-1 ml-[200px] p-10">
        <NavPage />
      </div>

    </section>
  );
};

export default App;
