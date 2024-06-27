import React from 'react';

const EmployeeProfileForm = ({ formData, closeProfileForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg w-1/3 relative">
        <button onClick={closeProfileForm} className="absolute top-0 right-0 mt-2 mr-2">
          <FontAwesomeIcon icon={faTimes} size="lg" className="text-purple-600 hover:text-gray-800" />
        </button>
        <h2 className="text-lg font-semibold mb-4">Employee Profile</h2>
        <div className="mb-4">
          <label htmlFor="employee_id" className="block text-gray-700 text-sm font-bold mb-2">Employee ID:</label>
          <p>{formData.employee_id}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="employee_name" className="block text-gray-700 text-sm font-bold mb-2">Employee Name:</label>
          <p>{formData.employee_name}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <p>{formData.password}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="qualification" className="block text-gray-700 text-sm font-bold mb-2">Qualification:</label>
          <p>{formData.qualification}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status:</label>
          <p>{formData.status}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="doj" className="block text-gray-700 text-sm font-bold mb-2">DOJ:</label>
          <p>{formData.doj}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileForm;
