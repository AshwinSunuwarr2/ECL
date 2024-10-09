import React from 'react';
import Sidebar from '../../organisms/sidebar/Sidebar';

import NavPage from '../../navigations/NavPage';

const App = () => {
  const sidebarTitle = "My Sidebar";

  return (
    <section className="flex w-full">
      <Sidebar sidebarTitle={sidebarTitle} />

      <div className="flex-1 bg-primary">
        <h1 className="text-[2.5rem] font-title text-center text-white">ECL APP</h1>
        <NavPage />
      </div>

    </section>
  );
};

export default App;
