import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function InviteButton() {
  return (
    <button className="inline-flex items-center justify-center md:w-1/2 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
      <FaWhatsapp className="w-6 h-6 mr-2" />
      Invite your Friends
    </button>
  );
}

export default InviteButton;

