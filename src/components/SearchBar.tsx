import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-4/5">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder=" Kerko ..."
          className="w-full p-1 pl-10 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent/30"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
