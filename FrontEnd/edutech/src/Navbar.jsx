import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';




function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <nav className=" bg-gradient-to-r from-blue-500 to-indigo-800 h-24 shadow-lg dark:bg-gray-800 w-full">
          <div className="w-full container px-6 py-3 flex justify-between items-center">
            <button onClick={toggleSidebar} className="mr-3 rounded-lg focus:outline-none focus:ring">
              <svg
                className="w-8 h-8 bg-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="square"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div className="flex items-center justify-center">
            <div className="text-3xl font-semibold H-32  bg-gradient-to-r from-gray-100 via-slate-300 to-slate-300 bg-clip-text text-transparent">
                   ED Tech
            </div>
            </div>

            
          </div>
        </nav>
       <Outlet/>
        {/* <Role />
        <Employee/>
        <Student/>
        <Teacher/>
        <Course/> */}
      </div>
    </div>
  );
}

export default Navbar;



