import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnInfo from "../ui/BtnInfo";
import logo from "../../assets/blocologo.png";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";

const NavList =
  "text-lg font-semibold cursor-pointer hover:text-[#FF4C29] transition-colors duration-300";

const cursos = [
  "Progamação Full Stack IA",
  "Design Full Stack IA",
  "Marketing Full Stack IA",
  "Fotografia Design",
  "Film Design",
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="z-50 md:hidden p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
          <IconMenu2
            size={32}
            stroke={1.5}
            color="white"
            className="transition-colors duration-300 hover:text-[#ffffff]"
          />
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 transition-opacity duration-400 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <nav
        className={`fixed top-0 right-0 h-full max-w-[90vw] w-[320px] bg-gradient-to-b from-[#1a1a1aaa] via-[#222222cc] to-[#1a1a1aaa] backdrop-blur-md z-50 shadow-2xl rounded-l-3xl transform transition-transform duration-400 flex flex-col p-10
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        aria-label="Menu móvel"
      >
        <div className="flex items-center justify-between mb-14">
          <Link to="/" onClick={() => setOpen(false)} aria-label="Página inicial">
            <img src={logo} alt="logo" className="h-14 object-contain" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-[#FF4C29] focus:outline-none transition-colors duration-300"
            aria-label="Fechar menu"
          >
            <IconX size={32} stroke={1.5} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 text-white font-sans">
          <li>
            <Link
              to="/"
              className={`${NavList} hover:scale-105 transform-gpu`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className={`${NavList} hover:scale-105 transform-gpu`}
              onClick={() => setOpen(false)}
            >
              Sobre
            </Link>
          </li>
          <li>
            <details className="group">
              <summary
                className={`flex justify-between items-center cursor-pointer ${NavList} list-none select-none hover:text-[#FF4C29] transition-colors duration-300`}
              >
                Cursos
                <IconChevronDown
                  size={20}
                  stroke={2}
                  className="ml-2 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul className="mt-4 pl-6 flex flex-col gap-4 text-sm text-gray-300">
                {cursos.map((curso) => (
                  <li key={curso}>
                    <Link
                      to="/cursos"
                      onClick={() => setOpen(false)}
                      className="hover:text-[#FF4C29] transition-colors duration-300"
                    >
                      {curso}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="/unidades"
              className={`${NavList} hover:scale-105 transform-gpu`}
              onClick={() => setOpen(false)}
            >
              Unidades
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className={`${NavList} hover:scale-105 transform-gpu`}
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </li>
        </ul>

        <div className="mt-auto">
          <Link to="/login" onClick={() => setOpen(false)}>
            <BtnInfo
              title={"Portal do Aluno"}
              bg={"FF4C29"}
              hover={"FF2E00"}
              cl={"white"}
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;