// import React, { useState } from 'react';
// import Employee from './Employee/Employee';

// const Modal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed z-10 inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen p-4">
//         <div className="bg-white rounded-lg p-4 shadow-lg max-w-md w-full">
//           <div className="flex justify-end">
//             <button
//               onClick={onClose}
//               className="text-gray-600 hover:text-gray-800"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="mt-4">
//             <p className="text-lg text-gray-700">Modal Content Goes Here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ButtonModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={openModal}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Open Modal
//       </button>
//       <Modal isOpen={isOpen} onClose={closeModal} />
//     </div>
//   );
// };

// export default EmployeeProfile;
