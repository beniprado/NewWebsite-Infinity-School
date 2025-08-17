import React from "react"
import { Link } from "react-router-dom" 
import BtnInfo from "../ui/BtnInfo"
import ListDropdown from "../ui/ListDropdown"
import logo from "../../assets/logo.png"
import MobileNav from "./MobileNav"

const NavList = "text-lg font-medium cursor-pointer hover:text-[#B91C0A] transition duration-120"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 md:py-4 px-5 md:px-15 bg-[#1A1A1A]">
      <Link to="/"><img src={logo} alt="logo" className=":h-[35px] sm:h-[50px]"/></Link>
      <ul className="hidden xl:flex items-center gap-10">
        <li className={NavList}>
          <Link to="/">Home</Link>
        </li>
        <li className={NavList}>
          <Link to="/sobre">Sobre</Link>
        </li>
        <Link to="/cursos">
          <ListDropdown
            NavList={NavList}
            title={"Curso"}
            items={[
              "Progamação Full Stack IA",
              "Design Full Stack IA",
              "Marketing Full Stack IA",
              "Fotografia Design",
              "Film Design",
            ]}
          />
        </Link>
        <li className={NavList}>
          <Link to="/unidades">Unidades</Link>
        </li>
        <li className={NavList}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <div className="hidden md:block">
        <Link to="/login">
          <BtnInfo title={"Portal do Aluno"} bg={"9D1A1A"} hover={"6A0000"} cl={"white"} />
        </Link>
      </div>
        <MobileNav />
    </nav>
  )
}

export default Navbar
