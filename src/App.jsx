import React from 'react'
import Button from './components/atoms/Button'
import Inputfield from './components/atoms/Inputfield'
import { Assets, Liabalities } from './components/pages'
import Sidebar from './components/organisms/sidebar/Sidebar'
import { Dashboard } from './components/templates'

const App = () => {
  return (
    <section className="m-0 p-0 h-screen max-w-full bg-background flex items-center justify-auto flex-col">
      {/* <Button /> */}
      
      {/* <Inputfield /> */}

      {/* <Assets /> */}
      {/* <Liabalities /> */}

      {/* <Sidebar/> */}
      <Dashboard />
    </section>
  )
}

export default App