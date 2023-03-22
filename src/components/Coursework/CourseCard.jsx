import React from 'react';

const CourseCard = ({ title, imageUrl }) => {
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-md p-4 md:w-1/3  w-full">
      <h2 className="text-black  text-lg font-bold mb-2">{title}</h2>
      <img src={imageUrl} alt={title} className="border border-purple-300 rounded-md w-full h-32 object-cover" />
    </div>
  );
};

export default CourseCard;
