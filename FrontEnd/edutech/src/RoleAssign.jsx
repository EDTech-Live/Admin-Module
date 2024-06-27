
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const RoleAssign = ({employee_id, employee_name}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); 
  const [isEditModal, setisEditModal] = useState(false)

  const notify = () => toast("role assigned");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setModalOpen(true);
    setDropdownOpen(false); // Close dropdown when opening modal
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openEditModal = () => {
    setisEditModal(true);
    setDropdownOpen(false); // Close dropdown when opening modal
  }

  const closeEditModal = () => {
    setisEditModal(false);
  }

  const [data, setdata] = useState([])
  const [error, setError] = useState(null);
  const [oneData, setOneData] = useState([]);

  const fetchData = async () => {
    
    try {
      const res = await axios.get('http://localhost:5050/viewrole');
      setdata(res.data.rows);
      setError(null);
    } catch (error) {
      setError(error.message);
    } 
  };

  const fetchOneata = async () => {
    try {
      const res = await axios.get(`http://localhost:5050/getOneAssign/${employee_id}`);
      setOneData(res.data.rows);
      setError(null);
      } catch (error) {
        setError(error.message);
        }
    };
        

  

  useEffect(() => {
    fetchData();
    fetchOneata();
  }, []);

  const [role_id, setrole_id] = useState("A1")
  

  const postApi = (e) => {
    e.preventDefault();
    let data = {
      role_id,
      employee_id,
    };
    fetch("http://localhost:5050/addassign", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        notify()
        fetchData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  const deleteApi = async (role_id, employee_id)=> {
    try {
      const res = await axios.delete(`http://localhost:5050/deleteassign/${role_id}/${employee_id}`)
      fetchData();
      fetchOneata();
      } catch (error) {
        setError(error.message);
        }
        };

  




  

  return (
    <div>
    <Toaster />
      <button 
        id="dropdownDefaultButton" 
        onClick={toggleDropdown} 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        type="button"
      >
        Role Assign 
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      <div 
        id="dropdown" 
        className={`z-50 ${isDropdownOpen ? 'block' : 'hidden'} bg-gradient-to-b from-blue-500 to-cyan-300 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-4`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" onClick={openModal} className="block px-4 py-2 font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
              Assign Role 
            </a>
          </li>
          <li>
            <a href="#" onClick={openEditModal}  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit Role</a>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/3 relative">
            <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2">
              Close
            </button>
            <h2 className="text-lg font-semibold mb-4">Assign Role {employee_name}</h2>
            
            

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Employee ID
                </th>
               
                <th scope="col" class="px-6 py-3 text-center">
                    Action  
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {employee_id}
                </th>
                <td class="px-6 py-4 text-center">
                    
<form class="max-w-sm mx-auto flex gap-4 ">
  
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={role_id} onChange={(e)=> {
    setrole_id(e.target.value)
  }}>
    <option selected disabled>SELECT ROLES</option>
    {data.map((element)=>{
      return(
          <option value={element.role_id}>{element.role_name}</option>
      )
    })}
    
    
  </select>
  <button type="submit" onClick={postApi} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

                </td>
               
            </tr>
            
        </tbody>
    </table>
</div>

          </div>
        </div>
      )}


{/* modal 2 */}

{isEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/3 relative">
            <button onClick={closeEditModal} className="absolute top-0 right-0 mt-2 mr-2">
              Close
            </button>
            <h2 className="text-lg font-semibold mb-4">Edit Role for {employee_name}</h2>
            
            

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Employee ID
                </th>



                <th scope="col" class="px-6 py-3 ">
                    Role Name   
                </th>
                
                
                <th scope="col" class="px-6 py-3 ">
                    Action  
                </th>
                
                
            </tr>
        </thead>
        <tbody>
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     
                </th>
                <td class="px-6 py-4 text-center"> */}
               {
                oneData.map((item)=> {
                  return(
                    <><tr>
                      <td>{employee_id}</td>
                      <td>{item.role_name}</td>
                      <td>
                      <button type="button" onClick={()=>deleteApi(item.role_id, employee_id)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-red-900">DELETE</button>
                      </td>
                      </tr>
                      </>
                  )
                })
               }
                
            
        </tbody>
    </table>
</div>

          </div>
        </div>
      )}



    </div>



  );
}

export default RoleAssign;
