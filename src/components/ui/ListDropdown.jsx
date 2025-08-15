import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import gsap from "gsap";

function ListDropdown({ title, items, NavList }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current); // cancela fechamento se voltar o mouse
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // atraso antes de fechar
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms de delay
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.95, y: -8 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );

      gsap.to(iconRef.current, {
        rotate: 180,
        duration: 0.25,
        ease: "power2.out"
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -8,
        duration: 0.2,
        ease: "power2.in"
      });

      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.25,
        ease: "power2.in"
      });
    }
  }, [isOpen]);

  return (
    <div
      className="relative inline-block text-left text-lg"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 ${NavList} transition-colors hover:text-[#B91C0A] transform duration-120`}
      >
        {title}
        <span ref={iconRef}>
          <IconChevronDown stroke={2} size={15} />
        </span>
      </button>

      <div
        ref={menuRef}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="absolute mt-2 w-48 backdrop-blur-md bg-white/60 border border-white/20 rounded-xl p-1 shadow-xl z-10 origin-top"
      >
        {items.map((item, index) => (
          <button
            key={index}
            className="block w-full text-start px-4 py-2 text-gray-800 hover:bg-white/30 rounded-lg font-medium transition-colors cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ListDropdown;