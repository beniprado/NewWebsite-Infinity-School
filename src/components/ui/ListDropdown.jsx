import React from "react";
import { useState, useRef, useEffect } from "react";
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

function ListDropdown({ title, items, NavList }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left text-lg" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-1 ${NavList}`}
      >
        {title} <IconChevronUp stroke={2} size={15}/>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg p-1 shadow-lg z-10">
          {items.map((item, index) => (
            <button
              key={index}
              className="block text-black text-start px-4 py-2 w-[100%] text-gray-70 hover:bg-[#00000033] transition rounded-lg font-medium cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListDropdown;
