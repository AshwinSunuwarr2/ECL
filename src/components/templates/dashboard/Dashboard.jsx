import React from 'react';
import Sidebar from '../../organisms/sidebar/Sidebar';

import NavPage from '../../navigations/NavPage';

const App = () => {
  const sidebarTitle = "My Sidebar";

  return (
    <section className="flex w-full">
      <Sidebar sidebarTitle={sidebarTitle} />

      <div className="flex-1 bg-primary">
        <NavPage />
      </div>

    </section>
  );
};

export default App;
