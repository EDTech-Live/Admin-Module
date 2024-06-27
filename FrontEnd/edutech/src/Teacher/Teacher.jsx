import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Teacher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    teacher_id: '',
    teacher_name: '',
    password: '',
    qualification: '',
    status: '',
    specialization: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setsearchQuery] = useState('') //to know that what  the user types in the search box.
  const itemsPerPage = 5;

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5050/viewteacher');
      setData(res.data.rows);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const postApi = async () => {
    try {
      await axios.post('http://localhost:5050/addteacher', formData);
      fetchData();
      setFormData({
        teacher_id: '',
        teacher_name: '',
        password: '',
        qualification: '',
        status: '',
        specialization: ''
      });
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateApi = async () => {
    try {
      await axios.patch(`http://localhost:5050/updateteacher/${formData.teacher_id}`, formData);
      fetchData();
      setFormData({
        teacher_id: '',
        teacher_name: '',
        password: '',
        qualification: '',
        status: '',
        specialization: ''
      }); 
      setShowModal(false);
      setIsUpdating(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setShowModal(true);
    setIsUpdating(false);
  };

  const openUpdateModal = (teacher) => {
    setFormData(teacher);
    setShowModal(true);
    setIsUpdating(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
        teacher_id: '',
        teacher_name: '',
        password: '',
        qualification: '',
        status: '',
        specialization: ''
    });
    setIsUpdating(false);
  };

  const handleSearchChange = (e) => {
    setsearchQuery(e.target.value);
    setCurrentPage(1);  // Reset to the first page when a search is performed
  }


  const filteredData = data.filter(item =>
    item.teacher_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.teacher_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <div className="max-w-full px-4 sm:px-8 py-4">

<form className="max-w-md mx-auto mr-4 py-2">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-6 text-gray-900 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-700 rounded-lg bg-gray-50 focus:ring-blue-900 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search fields ..."
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
        </div>
      </form>

      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                  Serial No.
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                  Teacher ID
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                Teacher Name
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                Password
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                Qualification
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                Status
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                Specialization
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-700 bg-blue-200 text-left text-base font-bold text-gray-900 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="4" className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center text-red-500">
                    Error: {error.message}
                  </td>
                </tr>
              ) : (
                currentItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-5 py-3 border-b border-blue-400 bg-white text-lg">
                      <p className="text-black whitespace-no-wrap">{index + 1}</p>
                    </td>
                    <td className="px-5 py-3 border-b border-blue-400 bg-white text-lg">
                      <p className="text-black whitespace-no-wrap">{item.teacher_id}</p>
                    </td>
                    <td className="px-5 py-3 border-b border-blue-400 bg-white text-lg">
                      <p className="text-black whitespace-no-wrap">{item.teacher_name}</p>
                    </td>
                    <td className="px-5 py-3 border-b border-blue-400 bg-white text-lg">
                      <p className="text-black whitespace-no-wrap">{item.password}</p>
                    </td>
                    <td className="px-5 py-3 border-b border-blue-400 bg-white text-lg">
                      <p className="text-black whitespace-no-wrap">{item.qualification}</p>
                    </td>
                    <td className="px-5 py-3 border-b border-blue-400 bg-white text-lg">
                      <p className="text-black whitespace-no-wrap">{item.status}</p>
                    </td>
                    <td className="px-5 py-3 border-b border-blue-400 bg-white text-lg">
                      <p className="text-blackwhitespace-no-wrap">{item.specialization}</p>
                    </td>
                    
                    <td className="px-5 py-5 border-b border-blue-400 bg-white text-lg">
                      <button
                        onClick={() => openUpdateModal(item)}
                        className="bg-blue-500 px-4 py-2 border-2  text-white rounded-lg"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={openModal} className="bg-blue-600 px-6 py-2 text-xl font-semibold border-2  text-white  rounded-lg">
          Add Teacher
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 border-2 border-blue-500 rounded-lg ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/3 relative">
            <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2">
              <FontAwesomeIcon icon={faTimes} size="lg" className="text-purple-600 hover:text-gray-800" />
            </button>
            <h2 className="text-lg font-semibold mb-4">{isUpdating ? 'Update Teacher' : 'Add New Teacher'}</h2>
            <form onSubmit={(e) => { e.preventDefault(); isUpdating ? updateApi() : postApi(); }}>
              <div className="mb-4">
                <label htmlFor="teacher_id" className="block text-gray-700 text-sm font-bold mb-2">Teacher ID:</label>
                <input
                  type="text"
                  name="teacher_id"
                  id="teacher_id"
                  value={formData.teacher_id}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Teacher ID"
                  required
                  readOnly={isUpdating} 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="Teacher_name" className="block text-gray-700 text-sm font-bold mb-2">Teacher Name:</label>
                <input
                  type="text"
                  name="teacher_name"
                  id="teacher_name"
                  value={formData.teacher_name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Teacher Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="qualification" className="block text-gray-700 text-sm font-bold mb-2">Qualification:</label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Qualification"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
                <input
                  type="text"
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="status"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="specialization" className="block text-gray-700 text-sm font-bold mb-2">Specialization:</label>
                <input
                  type="text"
                  name="specialization"
                  id="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Specialization"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {isUpdating ? 'Update Teacher' : 'Add Teacher'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;
