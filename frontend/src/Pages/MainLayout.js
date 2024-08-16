import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Admin Page/Sidebar/Sidebar.js';
import './MainLayout.css'

function MainLayout() {
  return (
    <>
    <div className='mainlayout-grid'>
   <Sidebar/>
    <Outlet/>
    </div>
    </>
  )
}

export default MainLayout