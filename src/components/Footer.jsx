import { FaYoutube, FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container flex justify-center items-center">
        <div className="flex items-center justify-between">
          <FaYoutube className="text-red-500 mr-4 flex-grow" size={24} />
          <FaDiscord className="text-purple-500 mr-4 flex-grow" size={24} />
          <FaInstagram className="text-pink-500 mr-4 flex-grow" size={24} />
          <FaLinkedin className="text-blue-500 mr-4 flex-grow" size={24} />
          <span className="text-sm tet-1xl font-bold text-violet-50">Contact@collate</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
