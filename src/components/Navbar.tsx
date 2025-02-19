import React from 'react';
import { Link } from 'react-router-dom';
import { Users, FolderKanban, UserCircle, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-[#FFCDB2]" />
            <span className="text-xl font-bold text-white">ProjectHub</span>
          </Link>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects or students..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-zinc-700 bg-zinc-800 text-gray-100 focus:outline-none focus:border-[#FFCDB2] placeholder-gray-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/projects" className="flex flex-col items-center text-gray-300 hover:text-[#FFCDB2]">
              <FolderKanban className="h-6 w-6" />
              <span className="text-xs">Projects</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center text-gray-300 hover:text-[#FFCDB2]">
              <UserCircle className="h-6 w-6" />
              <span className="text-xs">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar