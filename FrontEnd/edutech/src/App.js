// import React from 'react';
// import {RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { faDashboard } from '@fortawesome/free-solid-svg-icons';
// import Navbar from "./Navbar";
// import Dashboard from './Dashboard/Dashboard';
// import Student from './Student/Student';
// import Teacher from './Teacher/Teacher';
// import Employee from './Employee/Employee';
// import Role from './Role/Role';
// import Course from './Course/Course';





// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       { index: true, element: <Dashboard /> },
//       { path: "/dashboard", element: <Dashboard /> },
//       { path: "/student", element: <Student /> },
//       { path: "/teacher", element: <Teacher/> },
//       { path: "/employee", element: <Employee /> },
//       { path: "/role", element: <Role /> },
//       { path: "/course", element: <Course /> },
//     ],
//   },
// ]);

// function App() {
//   return (
    
//     <RouterProvider router={router} />
      
//    );
// }

// export default App;


import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from "./Navbar";
import Dashboard from './Dashboard/Dashboard';
import Student from './Student/Student';
import Teacher from './Teacher/Teacher';
import Employee from './Employee/Employee';
import Role from './Role/Role';
import Course from './Course/Course';
import Batch from './Btach/Batch';
import BatchPurchase from './BtachPurchase/BatchPurchase';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "student", element: <Student /> },
      { path: "teacher", element: <Teacher /> },
      { path: "employee", element: <Employee /> },
      { path: "role", element: <Role /> },
      { path: "course", element: <Course /> },
      { path: "batch", element: <Batch />},
      { path: "batchpurchase", element: <BatchPurchase />}
     
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    
  
  );
}

export default App;

