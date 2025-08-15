import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-md border border-gray-700 overflow-hidden transition-all duration-300">
      <button
        className="flex justify-between items-center w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <IconChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="px-4 pb-4 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;