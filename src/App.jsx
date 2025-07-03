import React from 'react'
import { Outlet } from "react-router";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-gray-700'>
      <Navbar/>
      <main className='min-h-screen'>
         <Outlet />
      </main>
      <footer>This is Footer</footer>
    </div>
  )
}

export default App