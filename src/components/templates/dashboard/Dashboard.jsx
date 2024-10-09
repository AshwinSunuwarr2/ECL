import React from 'react';
import Sidebar from '../../organisms/sidebar/Sidebar';

import NavPage from '../../navigations/NavPage';

import {Routes, Route} from 'react-router-dom';
import { Home } from '../../pages';

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Assets, Liabalities } from '../../pages';



const App = () => {
  const sidebarTitle = "My Sidebar";

  return (
    <section className="flex w-full">
      <Sidebar sidebarTitle={sidebarTitle} />

      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-title font-bold">Main Content</h1>
        <NavPage />
      </div>

    </section>
  );
};

export default App;
