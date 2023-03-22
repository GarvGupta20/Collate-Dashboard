import React from 'react';

const GetNotesButton = ({ onClick }) => {
  return (
    <div className="md:w-9/12">
    <button
      className=" border border-gray-300 bg-purple-100 text-gray-700 font-medium rounded-md py-2 px-4 transition-shadow duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      onClick={onClick}
    >
      Get Notes
    </button>
    </div>
  );
};

export default GetNotesButton;
