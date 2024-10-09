import React from 'react'

import {Routes, Route} from 'react-router-dom';
import { Home, Assets, Liabalities, ECLCalc } from '../pages';

const NavPage = () => {
  return (
    <section>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/assets' element={<Assets/>}/>
            <Route path='/liabilities' element={<Liabalities/>}/>
            <Route path='/eclcalc' element={<ECLCalc/>}/>
        </Routes>
    </section>
  )
}

export default NavPage;