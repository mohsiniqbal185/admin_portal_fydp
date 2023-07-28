import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                {children}            
            </div>
        </div>
    </div>
  )
}

export default Layout