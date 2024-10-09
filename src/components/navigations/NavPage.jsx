import React from 'react'

import {Routes, Route} from 'react-router-dom';
import { Home, Assets, Liabalities } from '../pages';

const NavPage = () => {
  return (
    <section>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/assets' element={<Assets/>}/>
            <Route path='/liabilities' element={<Liabalities/>}/>
        </Routes>
    </section>
  )
}

export default NavPage;